'use client'
import { useEffect } from 'react'

/**
 * Custom hook that registers a callback to be executed whenever a mouse click event occurs on the window.
 */
export function useOnMouseClick(callback: () => void) {
  useEffect(() => {
    window.addEventListener('click', callback)

    return () => {
      window.removeEventListener('click', callback)
    }
  }, [callback])
}
