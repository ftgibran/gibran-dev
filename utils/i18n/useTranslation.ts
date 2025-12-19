'use client'
import type { Translation, Translator } from '@utils/types/Translation'
import { useCallback } from 'react'
import { useIntl } from 'react-intl'

/**
 * Provides translation utilities for internationalization in the application.
 * This hook allows for formatting messages, checking label existence, handling errors,
 * and wrapping content with specific HTML-like tags.
 */
export function useTranslation(scope?: string): Translation {
  const intl = useIntl()

  const labelExists = useCallback(
    (key: string) => !!intl.messages[merge(scope, key)],
    [intl.messages, scope],
  )

  const t = useCallback<Translator>(
    (id, variables) => {
      return intl
        .formatMessage({ id: merge(scope, id) }, variables ? variables : {})
        .toString()
    },
    [intl, scope],
  )

  const handleErrorMessage = useCallback(
    (error: any, prefix = '', fallbackMsg = '') => {
      if (error?.code === 4100) return t('validation.error.metamask.4100')

      // response with structure {data:{errorCode}}
      return labelExists(`${prefix && `${prefix}.`}${error?.data?.errorCode}`)
        ? t(`${prefix && `${prefix}.`}${error?.data?.errorCode}`)
        : // response with structure {errorCode}
          labelExists(`${prefix && `${prefix}.`}${error?.errorCode}`)
          ? t(`${prefix && `${prefix}.`}${error?.errorCode}`)
          : // all the other cases
            fallbackMsg ||
            error?.data?.message ||
            error?.message ||
            t('validation.error.generic-error')
    },
    [labelExists, t],
  )

  return {
    t,
    withChunks,
    labelExists,
    handleErrorMessage,
  }
}

const withChunks = (...tags: string[]) => {
  return tags.reduce(
    (prev, tag) => ({
      ...prev,
      [tag]: (chunks: string[]) => `<${tag}>${chunks.join('')}</${tag}>`,
    }),
    {},
  )
}

const merge = (...tags: Array<string | undefined>) =>
  [...tags].filter(Boolean).join('.')
