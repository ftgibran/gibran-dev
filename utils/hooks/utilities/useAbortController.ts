'use client'
import { useCallback, useMemo, useState } from 'react'

/**
 * A custom hook that provides an easy-to-use interface for managing an `AbortController` instance,
 * including creation, replacement, deletion, and signaling aborted requests.
 */
export function useAbortController(reason = 'Request aborted!') {
  const [current, setCurrent] = useState<AbortController>()

  const isAborted = useMemo(
    () => current?.signal.aborted,
    [current?.signal.aborted],
  )

  const create = useCallback(
    (abortPrevious?: boolean) => {
      setCurrent((prev) => {
        if (abortPrevious) {
          prev?.abort(new Error(reason))
        }

        return prev ?? new AbortController()
      })
    },
    [reason],
  )

  const replace = useCallback(
    (abortPrevious?: boolean) => {
      setCurrent((prev) => {
        if (abortPrevious) {
          prev?.abort(new Error(reason))
        }

        return new AbortController()
      })
    },
    [reason],
  )

  const kill = useCallback(
    (abortPrevious?: boolean) => {
      setCurrent((prev) => {
        if (abortPrevious) {
          prev?.abort(new Error(reason))
        }

        return undefined
      })
    },
    [reason],
  )

  const abort = useCallback(() => {
    current?.abort(new Error(reason))

    return current !== undefined
  }, [current, reason])

  return {
    current,
    isAborted,

    create,
    replace,
    kill,
    abort,
  }
}
