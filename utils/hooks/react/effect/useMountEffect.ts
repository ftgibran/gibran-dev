'use client'
import { type EffectCallback, useEffect } from 'react'

/**
 * A custom React hook that executes a given effect only once when the component is mounted.
 */
export function useMountEffect(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(effect, [])
}
