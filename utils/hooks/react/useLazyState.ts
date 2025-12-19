'use client'
import { useEffect, useState } from 'react'

export function useLazyState<T>(state: T, delayInMillis = 0) {
  const [lazyState, setLazyState] = useState(state)

  useEffect(() => {
    setTimeout(() => setLazyState(state), delayInMillis)
  }, [delayInMillis, state])

  return lazyState
}
