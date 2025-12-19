'use client'
import { useEffect, useState } from 'react'

export interface WindowSize {
  windowWidth: number
  windowHeight: number
}

/**
 * Custom React hook that provides the current dimensions of the window.
 * Tracks the `windowWidth` and `windowHeight`, and updates whenever the window is resized.
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => ({
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
  }))

  useEffect(() => {
    const resizeEvent = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }

    window.addEventListener('resize', resizeEvent)

    return () => window.removeEventListener('resize', resizeEvent)
  }, [])

  return windowSize
}
