'use client'
import { useMountEffect } from '@utils/hooks/react/effect/useMountEffect'
import { useLazyEvent } from '@utils/hooks/react/event/useLazyEvent'
import { useState } from 'react'

/**
 * A hook that determines if the component is currently mounted.
 * It returns a boolean value indicating the mount status of the component.
 */
export function useIsMounted() {
  const [tick, setTick] = useState(false)

  const toggleTick = useLazyEvent(() => setTick(true))

  useMountEffect(() => {
    toggleTick()
  })

  return tick
}
