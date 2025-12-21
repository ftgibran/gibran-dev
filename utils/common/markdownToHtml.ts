import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { DOMAttributes } from 'react'

export function markdownToHtml(source: string) {
  const htmlString = marked.parse(source) as string

  return DOMPurify.sanitize(htmlString)
}

export function markdownToProps(source: string) {
  return {
    dangerouslySetInnerHTML: { __html: markdownToHtml(source) },
  } satisfies DOMAttributes<never>
}
