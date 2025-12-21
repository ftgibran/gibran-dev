import { type RefObject, useEffect, useRef, useState } from 'react'

type UseViewportYProgressResult<T extends HTMLElement> = {
  ref: RefObject<T | null>
  yProgress: number
}

export function useViewportYProgress<
  T extends HTMLElement,
>(): UseViewportYProgressResult<T> {
  const ref = useRef<T>(null)
  const [yProgress, setYProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = ref.current

      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const progress = (rect.top / viewportHeight) * 100

      const clamped = Math.min(100, Math.max(0, progress))

      setYProgress(clamped)
    }

    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return { ref, yProgress }
}
