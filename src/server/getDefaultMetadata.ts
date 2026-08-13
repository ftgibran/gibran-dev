import { DEFAULT_LOCALE, SITE_URL } from '@config/constants'
import { type Metadata } from 'next'

import { getHeadIntl } from '@/server/getHeadIntl'

export async function getDefaultMetadata(locale?: string) {
  const intl = await getHeadIntl(locale)

  // `/en-US` renders the same page as `/`, so it has to point search engines at
  // the root instead of standing as a second copy of it.
  const canonical = !locale || locale === DEFAULT_LOCALE ? '/' : `/${locale}`

  return {
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        'en-US': '/',
        'pt-BR': '/pt-BR',
        'x-default': '/',
      },
    },
    title: intl.formatMessage({ id: 'title' }),
    description: intl.formatMessage({ id: 'description' }),
    keywords: intl.formatMessage({ id: 'keywords' }),
    openGraph: {
      title: intl.formatMessage({ id: 'title' }),
      description: intl.formatMessage({ id: 'description' }),
      url: intl.formatMessage({ id: 'url' }),
      siteName: intl.formatMessage({ id: 'name' }),
      type: 'website',
      images: {
        url: 'https://gibran.dev/images/og.webp',
        width: 1200,
        height: 630,
      },
    },
    twitter: {
      card: 'summary_large_image',
      images: {
        url: 'https://gibran.dev/images/og.webp',
        width: 1200,
        height: 630,
      },
    },
    icons: {
      icon: [
        { url: '/favicon/favicon.ico' },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/favicon/site.webmanifest',
  } satisfies Metadata
}
