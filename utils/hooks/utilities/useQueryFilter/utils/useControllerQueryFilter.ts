'use client'
import { useFlushQueryIntoFilter } from '@utils/hooks/utilities/useQueryFilter/flush/useFlushQueryIntoFilter'
import { useFlushQueryIntoRouter } from '@utils/hooks/utilities/useQueryFilter/flush/useFlushQueryIntoRouter'
import { normalizeQueryValue } from '@utils/hooks/utilities/useQueryFilter/utils/normalizeQueryValue'
import type { BaseQueryFilter } from '@utils/hooks/utilities/useQueryFilter/utils/useBaseQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'
import { mapValues } from 'lodash'
import { useCallback } from 'react'

/**
 * Custom hook that provides functionality to manage and update query filters
 * for a controller, integrating with both the router and filter states.
 */
export function useControllerQueryFilter<Q extends QueryValues>(
  base: BaseQueryFilter<Q>,
) {
  const {
    defaultQuery,
    queryInRouter,
    onSubmit,
    flushStack,
    setFlushStack,
    setCurrentQuery,
  } = base

  const flushQueryIntoRouter = useFlushQueryIntoRouter(base)
  const flushQueryIntoFilter = useFlushQueryIntoFilter(base)

  const submit = useCallback(
    (inputQuery: Partial<Q>, isRedirect?: boolean) => {
      setFlushStack((n) => n + 1)

      setCurrentQuery((prev) => {
        const query = prev
          ? { ...prev, ...mapValues(inputQuery, normalizeQueryValue) }
          : defaultQuery

        onSubmit?.(query, flushStack === 0, inputQuery, isRedirect)

        if (queryInRouter) {
          flushQueryIntoRouter(query, isRedirect)
        } else {
          flushQueryIntoFilter(query)
        }

        return query
      })
    },
    [
      setFlushStack,
      setCurrentQuery,
      defaultQuery,
      onSubmit,
      flushStack,
      queryInRouter,
      flushQueryIntoRouter,
      flushQueryIntoFilter,
    ],
  )

  const refresh = useCallback(() => submit({}, true), [submit])

  const clear = useCallback(
    (isRedirect?: boolean) => submit(defaultQuery, isRedirect),
    [defaultQuery, submit],
  )

  return {
    submit,
    refresh,
    clear,
  }
}
