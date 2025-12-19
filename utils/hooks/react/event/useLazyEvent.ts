'use client'
import { useCallback, useEffect, useState } from 'react'

/**
 * useLazyEvent is a custom hook that provides a mechanism to lazily emit an event
 * with a payload, triggering the provided callback function whenever the event is emitted.
 */
export function useLazyEvent<T = boolean>(callback?: (payload: T) => void) {
  const [payload, setPayload] = useState<T>()

  const emit = useCallback((payload?: T) => {
    setPayload(payload ?? (true as unknown as T))
  }, [])

  useEffect(() => {
    if (payload) {
      callback?.(payload)

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPayload(undefined)
    }
  }, [callback, payload])

  return emit
}
