'use client'
import { DEFAULT_LOCALE } from '@config/constants'
import { getLocale } from '@utils/i18n/getLocale'
import { FC, PropsWithChildren } from 'react'
import { type IntlConfig, IntlProvider as _IntlProvider } from 'react-intl'

export type IntlProviderProps = PropsWithChildren<IntlConfig>

export const IntlProvider: FC<IntlProviderProps> = (props) => {
  const { locale, messages, ...rest } = props

  return (
    <_IntlProvider
      key={locale}
      locale={getLocale(locale)}
      defaultLocale={DEFAULT_LOCALE}
      messages={messages}
      onError={(err) => {
        if (err.code === 'MISSING_TRANSLATION') {
          console.warn('Missing translation:', err.message)

          return
        }

        console.error(err)
      }}
      {...rest}
    />
  )
}

IntlProvider.displayName = 'IntlProvider'
