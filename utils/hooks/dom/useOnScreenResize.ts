'use client'
import { debounce } from 'lodash'
import { useEffect, useRef } from 'react'

export interface OnScreenResizeOptions {
  isActive?: boolean
  delay?: number
  onlyWidth?: boolean
}

export function useOnScreenResize(
  onResize: () => void,
  options: OnScreenResizeOptions = {},
) {
  const { delay = 300, isActive = true, onlyWidth = false } = options
  const widthRef = useRef(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    if (typeof window === 'undefined' || !isActive) {
      return
    }

    const handleResize = () => {
      const currentWidth = window.innerWidth

      if (onlyWidth && currentWidth === widthRef.current) {
        return // Skip if width hasn't changed
      }

      widthRef.current = currentWidth
      onResize()
    }

    const debouncedResize = debounce(handleResize, delay)

    window.addEventListener('resize', debouncedResize)

    return () => {
      debouncedResize.cancel()
      window.removeEventListener('resize', debouncedResize)
    }
  }, [onResize, delay, isActive, onlyWidth])
}
