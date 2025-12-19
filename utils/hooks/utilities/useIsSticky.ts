import { useOnWindowScroll } from '@utils/hooks/dom/useOnScroll'
import { RefObject, useState } from 'react'

export function useIsSticky(ref: RefObject<HTMLElement | null>, offset = 0) {
  const [isSticky, setIsSticky] = useState(false)

  useOnWindowScroll(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()

      console.log(rect.top)

      setIsSticky(rect.top === offset)
    }
  })

  return isSticky
}
