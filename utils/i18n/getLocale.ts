import { SUPPORTED_LOCALES, SupportedLocale } from '@config/constants'

export function getLocale(locale: SupportedLocale | string) {
  return (
    SUPPORTED_LOCALES.includes(locale as SupportedLocale) ? locale : 'en-US'
  ) as SupportedLocale
}
