'use client'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'

/**
 * A custom hook that provides a function to format numbers with ordinal suffixes based on the current locale.
 *
 * This function formats the provided number with the appropriate ordinal suffix
 * according to the locale settings, with special handling for English and
 * generic formatting for other locales.
 */
export function useOrdinaryNumberFormatter() {
  const { locale } = useIntl()

  return useMemo(() => {
    const pr = new Intl.PluralRules(locale, { type: 'ordinal' })

    const suffixes = new Map([
      ['one', 'st'],
      ['two', 'nd'],
      ['few', 'rd'],
      ['other', 'th'],
    ])

    return (n: number) => {
      if (locale.includes('en')) {
        const rule = pr.select(n)
        const suffix = suffixes.get(rule)

        return `${n}${suffix}`
      }

      return `${n}º`
    }
  }, [locale])
}
