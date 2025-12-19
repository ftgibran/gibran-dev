'use client'
import { type DependencyList, useEffect, useRef, useState } from 'react'

/**
 * A custom hook to dynamically adjust the font size of a text element to fit within a given maximum width.
 */
export function useResponsiveFontSize(
  maxWidth: number,
  initialFontSize: number,
  deps: DependencyList = [],
) {
  const textRef = useRef<HTMLDivElement>(null)
  const [fontSize, setFontSize] = useState(initialFontSize)

  useEffect(() => {
    const adjustFontSize = () => {
      const element = textRef.current

      if (element) {
        let currentFontSize = initialFontSize

        element.style.fontSize = `${currentFontSize}px`

        while (
          (element.scrollWidth || element.offsetWidth) > maxWidth &&
          currentFontSize > 0
        ) {
          currentFontSize -= 0.5
          element.style.fontSize = `${Math.max(currentFontSize, 0.125)}px`
        }

        setFontSize(currentFontSize)
      }
    }

    adjustFontSize()

    window.addEventListener('resize', adjustFontSize)

    return () => window.removeEventListener('resize', adjustFontSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxWidth, initialFontSize, ...deps])

  return { textRef, fontSize }
}
