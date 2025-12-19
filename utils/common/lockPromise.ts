import { memoize, type MemoizedFunction } from 'lodash'

/**
 * Wraps a promise-returning function to ensure that it is only executed once
 * at a time for the same arguments while caching ongoing executions.
 */
export function lockPromise<T extends (...args: any[]) => Promise<any>>(fn: T) {
  const memoized = memoize(async (...args: any[]) => {
    try {
      return await fn(...args)
    } finally {
      memoized.cache.delete(args[0]) // Clean up cache to allow future calls
    }
  })

  return memoized as T & MemoizedFunction
}
