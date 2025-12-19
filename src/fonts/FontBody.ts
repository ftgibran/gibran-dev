import { Lexend } from 'next/font/google'

export const FontBody = Lexend({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  display: 'swap',
})
