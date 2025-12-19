import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { SupportedLocale } from '@config/constants'
import { getLocale } from '@utils/i18n/getLocale'
import { localeFlattenMessages } from '@utils/i18n/localeFlattenMessages'

export async function loadMessages(locale: SupportedLocale | string) {
  const messages: Record<string, string> = {}

  const dir = join(process.cwd(), 'locale', getLocale(locale))

  const files = await readdir(dir)
  const jsonFiles = files.filter((file) => file.endsWith('.json'))

  for (const file of jsonFiles) {
    const filePath = join(dir, file)
    const content = await readFile(filePath, 'utf-8')
    const data = JSON.parse(content)

    const fileKey = file.replace('.json', '')

    messages[fileKey] = data
  }

  return localeFlattenMessages(messages)
}
