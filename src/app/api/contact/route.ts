import { getEnvString } from '@utils/common/getEnvs'

/**
 * The Discord webhook used to live in `NEXT_PUBLIC_DISCORD_HOOK_URL` and was
 * called straight from the browser, which inlined the token into the client
 * bundle for anyone to read and abuse. It stays server-side now: the browser
 * only ever talks to this route.
 */
const DISCORD_HOOK_URL = getEnvString(process.env.DISCORD_HOOK_URL)

const LIMITS = { name: 120, email: 200, message: 4000 } as const

type ContactPayload = {
  name: string
  email: string
  message: string
}

function parsePayload(body: unknown): ContactPayload | null {
  if (typeof body !== 'object' || body === null) return null

  const { name, email, message } = body as Record<string, unknown>

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return null
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  }

  const isFilled = Object.values(trimmed).every(Boolean)

  const isWithinLimits = (
    Object.keys(LIMITS) as Array<keyof typeof LIMITS>
  ).every((key) => trimmed[key].length <= LIMITS[key])

  if (!isFilled || !isWithinLimits) return null

  // Deliberately loose: the point is to reject junk, not to police addresses.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) return null

  return trimmed
}

/** Discord renders markdown, so user input must not be able to inject it. */
function escapeMarkdown(value: string) {
  return value.replace(/([*_`~|\\>])/g, '\\$1')
}

export async function POST(request: Request) {
  if (!DISCORD_HOOK_URL) {
    console.error('DISCORD_HOOK_URL is not set')

    return Response.json({ error: 'not_configured' }, { status: 500 })
  }

  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'invalid_body' }, { status: 400 })
  }

  const payload = parsePayload(body)

  if (!payload) {
    return Response.json({ error: 'invalid_payload' }, { status: 400 })
  }

  const content = [
    `**Name:** ${escapeMarkdown(payload.name)}`,
    `**Email:** ${escapeMarkdown(payload.email)}`,
    `**Message:**\n${escapeMarkdown(payload.message)}`,
  ].join('\n')

  try {
    const response = await fetch(DISCORD_HOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Escaping handles markdown, but @everyone is not markdown. Without
      // this, anyone hitting the endpoint could ping the whole server.
      body: JSON.stringify({ content, allowed_mentions: { parse: [] } }),
    })

    if (!response.ok) {
      console.error('Discord webhook failed', response.status)

      return Response.json({ error: 'delivery_failed' }, { status: 502 })
    }
  } catch (e) {
    console.error('Discord webhook unreachable', e)

    return Response.json({ error: 'delivery_failed' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
