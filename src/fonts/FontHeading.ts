import { Kanit } from 'next/font/google'

// Kanit has no variable version, so every weight is a separate file. These four
// are the ones the theme actually asks for: medium (labels, h6), semibold (h4,
// h5), bold (the heading recipe base, title) and extrabold (h1, h2).
// The italic faces are deliberately absent: the theme obliques the normal face,
// which is what the site has always rendered.
export const FontHeading = Kanit({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal'],
  display: 'swap',
})
