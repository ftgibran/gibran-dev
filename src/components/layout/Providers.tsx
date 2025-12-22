import { DEFAULT_LOCALE, IS_DEVELOPMENT } from '@config/constants'
import { Lazy } from '@utils/components/Lazy'
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
    <Lazy isDisabled={!IS_DEVELOPMENT}>
      <IntlProvider locale={locale} messages={messages}>
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </IntlProvider>
    </Lazy>
  )
}

Providers.displayName = 'Providers'
