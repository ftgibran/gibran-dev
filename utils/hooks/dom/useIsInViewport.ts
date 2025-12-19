'use client'
import { type IdOrRef, useHtmlElement } from '@utils/hooks/dom/useHtmlElement'
import { useEffect, useState } from 'react'

/**
 * A custom hook to determine if an HTML element is within the viewport based on the specified margins.
 */
export function useIsInViewport(
  idOrRef: IdOrRef,
  rootMargin = '-50% 0px -50% 0px',
) {
  const [isActive, setIsActive] = useState(false)

  const el = useHtmlElement(idOrRef)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting)
      },
      { rootMargin },
    )

    if (el) {
      observer.observe(el)
    }

    return () => {
      observer.disconnect()
    }
  }, [el, rootMargin])

  return isActive
}
