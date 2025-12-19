'use client'
import {
  type EventEffect,
  useEventEffect,
} from '@utils/hooks/react/effect/useEventEffect'
import { type ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'

export type RouterQueryEventEffect = EventEffect<
  [routerQuery: ReadonlyURLSearchParams]
>

/**
 * A custom hook that ties router query changes to a given effect.
 * This hook listens to changes in the search parameters and applies the provided effect(s).
 */
export function useRouterQueryEffect(...effect: RouterQueryEventEffect) {
  const routerQuery = useSearchParams()

  useEventEffect([routerQuery], ...effect)
}
