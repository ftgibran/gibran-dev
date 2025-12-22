import { marked } from 'marked'
import { DOMAttributes } from 'react'

export function markdownToHtml(source: string) {
  return marked.parse(source) as string
}

export function markdownToProps(source: string) {
  return {
    dangerouslySetInnerHTML: { __html: markdownToHtml(source) },
  } satisfies DOMAttributes<never>
}
