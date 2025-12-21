import { SUPPORTED_LOCALES } from '@config/constants'
import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Providers } from '@/components/layout/Providers'
import { ServerLayout } from '@/components/layout/ServerLayout'
import { getDefaultMetadata } from '@/server/getDefaultMetadata'

export type RootLayoutProps = Readonly<{
  children: ReactNode
  params: Promise<{ locale: string }>
}>

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props
  const { locale } = await props.params

  return (
    <ServerLayout locale={locale}>
      <Providers locale={locale}>{children}</Providers>
    </ServerLayout>
  )
}

export async function generateMetadata(
  props: RootLayoutProps,
): Promise<Metadata> {
  const { locale } = await props.params

  return getDefaultMetadata(locale)
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}
