'use client'
import { DependencyList, useEffect, useRef } from 'react'

declare const UNDEFINED_VOID_ONLY: unique symbol
export type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never }

export type EventEffect<M extends readonly unknown[]> = [
  effect?: (...args: Required<Partial<M>>) => void | Destructor,
  deps?: DependencyList,
]

export function useEventEffect<A1, M extends readonly [A1]>(
  memos: M,
  ...effect: EventEffect<M>
): void

export function useEventEffect<A1, A2, M extends readonly [A1, A2]>(
  memos: M,
  ...effect: EventEffect<M>
): void

export function useEventEffect<A1, A2, A3, M extends readonly [A1, A2, A3]>(
  memos: M,
  ...effect: EventEffect<M>
): void

export function useEventEffect<
  A1,
  A2,
  A3,
  A4,
  M extends readonly [A1, A2, A3, A4],
>(memos: M, ...effect: EventEffect<M>): void

export function useEventEffect<
  A1,
  A2,
  A3,
  A4,
  A5,
  M extends readonly [A1, A2, A3, A4, A5],
>(memos: M, ...effect: EventEffect<M>): void

export function useEventEffect<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  M extends readonly [A1, A2, A3, A4, A5, A6],
>(memos: M, ...effect: EventEffect<M>): void

export function useEventEffect<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  M extends readonly [A1, A2, A3, A4, A5, A6, A7],
>(memos: M, ...effect: EventEffect<M>): void

export function useEventEffect<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  M extends readonly [A1, A2, A3, A4, A5, A6, A7, A8],
>(memos: M, ...effect: EventEffect<M>): void

export function useEventEffect<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  M extends readonly [A1, A2, A3, A4, A5, A6, A7, A8, A9],
>(memos: M, ...effect: EventEffect<M>): void

/**
 * A custom hook that runs an effect function when the specified dependency array
 * changes and ensures proper cleanup of side effects.
 */
export function useEventEffect<M extends readonly unknown[]>(
  memos: M,
  ...effect: EventEffect<M>
) {
  const [callback, deps = []] = effect

  const onReset = useRef<() => void>(null)

  useEffect(() => {
    if (memos.every((m) => m !== undefined && m !== null)) {
      const current = callback?.(...(memos as Required<Partial<M>>))

      if (current) {
        onReset.current = current
      }
    } else {
      onReset.current?.()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...memos, ...deps])
}
