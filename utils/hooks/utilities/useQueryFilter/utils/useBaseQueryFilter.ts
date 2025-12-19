'use client'
import type { QueryValues } from '@utils/types/QueryValues'
import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'

export type BaseQueryFilter<Q extends QueryValues> = ReturnType<
  typeof useBaseQueryFilter<Q>
>

export interface QueryFilterOptions<Q extends QueryValues> {
  defaultQuery: Q
  queryInRouter?: boolean
  debounceDelay?: number
  onSubmit?: (
    query: Q,
    canAbort: boolean,
    inputQuery: Partial<Q>,
    isRedirect?: boolean,
  ) => void
}

/**
 * A custom hook that manages query parameters for filtering functionality in a more flexible manner.
 */
export function useBaseQueryFilter<Q extends QueryValues>(
  options: QueryFilterOptions<Q>,
) {
  const { defaultQuery, queryInRouter = true } = options

  const params = useSearchParams()

  const routerQuery = useMemo(() => {
    const keys = Object.keys(defaultQuery)

    return keys.reduce<Record<string, string | string[]>>((prev, key) => {
      const value = params.get(key)

      if (value) return { ...prev, [key]: value }

      return prev
    }, {})
  }, [defaultQuery, params])

  const [flushStack, setFlushStack] = useState(0)

  const [currentQuery, setCurrentQuery] = useState<Q>(() => defaultQuery)
  const [filterQuery, setFilterQuery] = useState<Q>()

  return {
    ...options,
    queryInRouter,

    routerQuery,

    flushStack,
    setFlushStack,

    currentQuery,
    setCurrentQuery,

    filterQuery,
    setFilterQuery,
  }
}
