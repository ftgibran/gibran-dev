import { type RefObject, useEffect, useRef, useState } from 'react'

type UseViewportVisibilityOptions = {
  thresholdStep?: number
  root?: Element | null
  rootMargin?: string
}

type UseViewportVisibilityResult<T extends HTMLElement> = {
  ref: RefObject<T | null>
  visiblePercentage: number
}

export function useViewportVisibility<T extends HTMLElement>({
  thresholdStep = 0.01,
  root = null,
  rootMargin = '0px',
}: UseViewportVisibilityOptions = {}): UseViewportVisibilityResult<T> {
  const ref = useRef<T>(null)
  const [visiblePercentage, setVisiblePercentage] = useState(0)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const thresholds = Array.from(
      { length: Math.floor(1 / thresholdStep) + 1 },
      (_, i) => i * thresholdStep,
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisiblePercentage(Math.round(entry.intersectionRatio * 100))
      },
      { threshold: thresholds, root, rootMargin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [thresholdStep, root, rootMargin])

  return { ref, visiblePercentage }
}
