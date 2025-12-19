'use client'
import type { BaseQueryFilter } from '@utils/hooks/utilities/useQueryFilter/utils/useBaseQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'
import { debounce } from 'lodash'
import { useCallback } from 'react'

/**
 * Creates a debounced function for updating the filter query in a provided base query filter.
 */
export function useFlushQueryIntoFilter<Q extends QueryValues>(
  base: BaseQueryFilter<Q>,
) {
  const { debounceDelay, setFilterQuery, setFlushStack } = base

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounce((query: Q) => {
      return new Promise<boolean>((resolve) => {
        setFilterQuery(query)

        setFlushStack(0)

        resolve(true)
      })
    }, debounceDelay),
    [debounceDelay],
  )
}
