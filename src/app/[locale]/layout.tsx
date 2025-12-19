import { SUPPORTED_LOCALES } from '@config/constants'
import { ReactNode } from 'react'

import { Providers } from '@/components/layout/Providers'
import { ServerLayout } from '@/components/layout/ServerLayout'

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

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}
