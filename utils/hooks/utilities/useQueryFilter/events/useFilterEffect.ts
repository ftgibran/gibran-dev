'use client'
import {
  type EventEffect,
  useEventEffect,
} from '@utils/hooks/react/effect/useEventEffect'
import { QueryFilter } from '@utils/hooks/utilities/useQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'

export type FilterEventEffect<Q extends QueryValues> = EventEffect<
  [filterQuery: Q]
>

/**
 * Executes an effect function whenever the specified `filter` changes.
 */
export function useFilterEffect<Q extends QueryValues>(
  { filter }: QueryFilter<Q>,
  ...effect: FilterEventEffect<Q>
) {
  useEventEffect([filter], ...effect)
}
