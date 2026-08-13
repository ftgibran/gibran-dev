import { DEFAULT_LOCALE, GA_ID, IS_PRODUCTION } from '@config/constants'
import Script from 'next/script'
import { FC, PropsWithChildren } from 'react'

import { PersonJsonLd } from '@/components/misc/PersonJsonLd'
import { FontBody, FontHeading, FontLogo, FontMono } from '@/fonts'

const FONT_CLASSES = `${FontHeading.variable} ${FontBody.variable} ${FontLogo.variable} ${FontMono.variable}`

export type ServerLayoutProps = PropsWithChildren<{
  locale?: string
}>

export const ServerLayout: FC<ServerLayoutProps> = async (props) => {
  const { children, locale = DEFAULT_LOCALE } = props

  const hasAnalytics = IS_PRODUCTION && !!GA_ID

  return (
    <html lang={locale}>
      <body className={FONT_CLASSES}>
        {/* Server-rendered on purpose: React skips script tags rendered on the
            client, and everything below Providers is inside a client boundary. */}
        <PersonJsonLd />

        {children}

        {hasAnalytics && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy={'afterInteractive'}
            />
            <Script id={'ga-init'} strategy={'afterInteractive'}>
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}

ServerLayout.displayName = 'ServerLayout'
