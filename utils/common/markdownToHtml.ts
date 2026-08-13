import { Marked } from 'marked'
import { DOMAttributes } from 'react'

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(source: string) {
  return source.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char])
}

/**
 * Raw HTML is escaped instead of emitted, so the output of `markdownToHtml` is
 * always safe to hand to `dangerouslySetInnerHTML`. Content comes from our own
 * locale files today, but nothing in the pipeline enforces that.
 */
const marked = new Marked({
  renderer: {
    html: ({ text }) => escapeHtml(text),
  },
})

export function markdownToHtml(source: string) {
  return marked.parse(source, { async: false })
}

export function markdownToProps(source: string) {
  return {
    dangerouslySetInnerHTML: { __html: markdownToHtml(source) },
  } satisfies DOMAttributes<never>
}
