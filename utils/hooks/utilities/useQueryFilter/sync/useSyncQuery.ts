'use client'
import { useMountEffect } from '@utils/hooks/react/effect/useMountEffect'
import type { BaseQueryFilter } from '@utils/hooks/utilities/useQueryFilter/utils/useBaseQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'
import { useCallback } from 'react'

/**
 * Synchronizes the query state with a predefined default query when no query is available in the router.
 */
export function useSyncQuery<Q extends QueryValues>(base: BaseQueryFilter<Q>) {
  const { queryInRouter, defaultQuery, setCurrentQuery, setFilterQuery } = base

  const onSyncQuery = useCallback(() => {
    setCurrentQuery(() => {
      setFilterQuery(defaultQuery)

      return defaultQuery
    })
  }, [defaultQuery, setCurrentQuery, setFilterQuery])

  useMountEffect(() => {
    if (!queryInRouter) {
      onSyncQuery()
    }
  })
}
