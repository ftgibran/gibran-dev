'use client'
import { DEFAULT_LOCALE } from '@config/constants'
import { useCallback } from 'react'
import { useIntl } from 'react-intl'

/**
 * Builds a href for the current locale. Paths are written locale-agnostic
 * (`/`, `/#about`) and get prefixed only when the active locale is not the
 * default one, which is served from the root.
 */
export function useLocalePath() {
  const { locale } = useIntl()

  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`

  return useCallback(
    (path: string) => {
      if (!prefix) return path

      // `/pt-BR#about` instead of `/pt-BR/#about`
      if (path.startsWith('/#')) return `${prefix}#${path.slice(2)}`

      return `${prefix}${path}`
    },
    [prefix],
  )
}
