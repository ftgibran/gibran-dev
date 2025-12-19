'use client'
import {
  DependencyList,
  EffectCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

/**
 * A custom React hook that behaves like the `useEffect` hook, but delays
 * the execution of the provided effect callback until after the component
 * has been mounted. The cleanup function is invoked during unmount or when
 * dependencies change.
 */
export const useEffectAfterMounted = (
  effect: EffectCallback,
  deps: DependencyList,
) => {
  const onReset = useRef<() => void>(null)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isMounted) {
      const current = effect()

      if (current) {
        onReset.current = current
      }
    } else {
      setIsMounted(true)
    }

    return () => {
      onReset.current?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
