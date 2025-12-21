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
      <head>
        <link
          rel={'apple-touch-icon'}
          sizes={'180x180'}
          href={'/favicon/apple-touch-icon.png'}
        />

        <link
          rel={'icon'}
          type={'image/png'}
          sizes={'32x32'}
          href={'/favicon/favicon-32x32.png'}
        />

        <link
          rel={'icon'}
          type={'image/png'}
          sizes={'16x16'}
          href={'/favicon/favicon-16x16.png'}
        />

        <link rel={'manifest'} href={'/favicon/site.webmanifest'} />
      </head>

      <body className={FONT_CLASSES}>{children}</body>
    </html>
  )
}

ServerLayout.displayName = 'ServerLayout'
