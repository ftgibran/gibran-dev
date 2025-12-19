'use client'
import { useRouterQueryEffect } from '@utils/hooks/utilities/useQueryFilter'
import { normalizeQueryValue } from '@utils/hooks/utilities/useQueryFilter/utils/normalizeQueryValue'
import type { BaseQueryFilter } from '@utils/hooks/utilities/useQueryFilter/utils/useBaseQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'
import { isEqual, keys } from 'lodash'
import { useCallback } from 'react'

/**
 * Synchronizes query parameters between the router and the application's state.
 */
export function useSyncQueryWithRouter<Q extends QueryValues>(
  base: BaseQueryFilter<Q>,
) {
  const {
    queryInRouter,
    routerQuery,
    defaultQuery,
    setCurrentQuery,
    setFilterQuery,
    flushStack,
  } = base

  const onSyncQuery = useCallback(() => {
    const current = keys({ ...routerQuery, ...defaultQuery }).reduce(
      (prev, key) => {
        const val = routerQuery[key] ?? defaultQuery[key]

        return { ...prev, [key]: normalizeQueryValue(val) } as Q
      },
      {} as Q,
    )

    setCurrentQuery((prev) => {
      const query = isEqual(prev, current) ? prev : current

      setFilterQuery(query)

      return query
    })
  }, [defaultQuery, routerQuery, setCurrentQuery, setFilterQuery])

  useRouterQueryEffect(() => {
    if (queryInRouter && flushStack <= 1) {
      onSyncQuery()
    }
  }, [queryInRouter])
}
