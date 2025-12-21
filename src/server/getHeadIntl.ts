import { DEFAULT_LOCALE } from '@config/constants'
import { createIntl, createIntlCache } from '@formatjs/intl'

export async function getHeadIntl(locale: string = DEFAULT_LOCALE) {
  const messages = (await import(`../../locale/${locale}/default_head.json`))
    .default

  const cache = createIntlCache()

  return createIntl({ locale, messages }, cache)
}
