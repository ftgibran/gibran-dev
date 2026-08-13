import { Geist_Mono } from 'next/font/google'

// `preload: false` because `fonts.mono` is only reachable through the `code`
// recipe, and no page renders a <code> today. It still loads on demand if one
// ever does, it just stops competing with the LCP image for bandwidth.
export const FontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})
