'use client'
import type { BaseQueryFilter } from '@utils/hooks/utilities/useQueryFilter/utils/useBaseQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'
import { debounce, entries, isEqual } from 'lodash'
import { usePathname, useRouter } from 'next/navigation'
import qs from 'qs'
import { useCallback } from 'react'

/**
 * Custom hook that creates a debounced function to update the router's query parameters based on the given input.
 * This can be used to manage and synchronize query parameters with the router.
 */
export function useFlushQueryIntoRouter<Q extends QueryValues>(
  base: BaseQueryFilter<Q>,
) {
  const { defaultQuery, routerQuery, debounceDelay, setFlushStack } = base

  const { push, replace } = useRouter()
  const pathname = usePathname()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounce(async (inputQuery: Partial<Q>, isRedirect = false) => {
      setFlushStack(1)

      const query = entries(inputQuery).reduce((prev, [key, val]) => {
        if (isEqual(val, defaultQuery[key])) {
          delete prev[key]
        } else {
          prev[key] = Array.isArray(val) ? val.map(String) : String(val)
        }

        return prev
      }, routerQuery)

      const flush = isRedirect ? replace : push

      flush(`${pathname}?${qs.stringify(query)}`, { scroll: false })

      setFlushStack(0)
    }, debounceDelay),
    [push, replace, debounceDelay],
  )
}
