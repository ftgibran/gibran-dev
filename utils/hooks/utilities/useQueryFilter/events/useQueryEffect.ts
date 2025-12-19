'use client'
import {
  type EventEffect,
  useEventEffect,
} from '@utils/hooks/react/effect/useEventEffect'
import { QueryFilter } from '@utils/hooks/utilities/useQueryFilter'
import type { QueryValues } from '@utils/types/QueryValues'

export type QueryEventEffect<Q extends QueryValues> = EventEffect<[current: Q]>

/**
 * A hook that listens to changes in the current query filter and triggers the specified effect.
 * */
export function useQueryEffect<Q extends QueryValues>(
  { current }: QueryFilter<Q>,
  ...effect: QueryEventEffect<Q>
) {
  useEventEffect([current], ...effect)
}
