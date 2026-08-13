import { Lexend } from 'next/font/google'

// No `weight` array on purpose: Lexend is a variable font, so omitting it ships
// one file that covers every weight instead of eight static instances.
export const FontBody = Lexend({
  variable: '--font-body',
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
})
