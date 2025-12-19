'use client'

import { useEventEffect } from '@utils/hooks/react/effect/useEventEffect'
import type { FilterEventEffect } from '@utils/hooks/utilities/useQueryFilter/events/useFilterEffect'
import { useSyncQuery } from '@utils/hooks/utilities/useQueryFilter/sync/useSyncQuery'
import { useSyncQueryWithRouter } from '@utils/hooks/utilities/useQueryFilter/sync/useSyncQueryWithRouter'
import {
  type QueryFilterOptions,
  useBaseQueryFilter,
} from '@utils/hooks/utilities/useQueryFilter/utils/useBaseQueryFilter'
import { useControllerQueryFilter } from '@utils/hooks/utilities/useQueryFilter/utils/useControllerQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'

export type QueryFilter<Q extends QueryValues> = ReturnType<
  typeof useQueryFilter<Q>
>

/**
 * A hook to manage and apply query filters with synchronization between controllers and routing mechanisms.
 */
export function useQueryFilter<Q extends QueryValues>(
  options: QueryFilterOptions<Q>,
  ...effect: FilterEventEffect<Q>
) {
  const base = useBaseQueryFilter(options)
  const controller = useControllerQueryFilter(base)

  useSyncQueryWithRouter(base) // for queryInRouter = true
  useSyncQuery(base) // for queryInRouter = false

  // Wrap OnFilter event effect
  useEventEffect([base.filterQuery], ...effect)

  return {
    ...base.currentQuery,
    ...controller,

    default: base.defaultQuery,
    current: base.currentQuery,
    filter: base.filterQuery,
  }
}
