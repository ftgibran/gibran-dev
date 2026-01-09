import { DEFAULT_LOCALE } from '@config/constants'
import { FC, PropsWithChildren } from 'react'

import { FontBody, FontHeading, FontLogo, FontMono } from '@/fonts'

const FONT_CLASSES = `${FontHeading.variable} ${FontBody.variable} ${FontLogo.variable} ${FontMono.variable}`

export type ServerLayoutProps = PropsWithChildren<{
  locale?: string
}>

export const ServerLayout: FC<ServerLayoutProps> = async (props) => {
  const { children, locale = DEFAULT_LOCALE } = props

  return (
    <html lang={locale}>
      <body className={FONT_CLASSES}>{children}</body>
    </html>
  )
}

ServerLayout.displayName = 'ServerLayout'
