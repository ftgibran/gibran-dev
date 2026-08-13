import { DEFAULT_LOCALE } from '@config/constants'
import { loadMessages } from '@utils/i18n/loadMessages'
import type { FC, PropsWithChildren } from 'react'

import { IntlProvider } from '@/components/layout/i18n/IntlProvider'
import { DesignSystemProvider } from '@/components/ui/provider'

export type ProvidersProps = PropsWithChildren<{
  locale?: string
}>

export const Providers: FC<ProvidersProps> = async (props) => {
  const { children, locale = DEFAULT_LOCALE } = props

  const messages = await loadMessages(locale)

  return (
    <IntlProvider locale={locale} messages={messages}>
      <DesignSystemProvider>{children}</DesignSystemProvider>
    </IntlProvider>
  )
}

Providers.displayName = 'Providers'
