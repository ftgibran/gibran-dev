'use client'
import { useEffect } from 'react'

/**
 * A custom hook that triggers a callback function when focus moves out of a specified element.
 */
export function useFocusOut(element: Element | null, callback: () => void) {
  useEffect(() => {
    const focusEvent = () => {
      const el = document.activeElement

      if (element && !element.contains(el)) {
        callback()
      }
    }

    document.addEventListener('focusin', focusEvent, true)

    return () => document.removeEventListener('focusin', focusEvent, true)
  }, [callback, element])
}
