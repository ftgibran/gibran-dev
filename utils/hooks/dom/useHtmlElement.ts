'use client'
import { RefObject, useEffect, useState } from 'react'

export type IdOrRef<T extends HTMLElement = HTMLElement> =
  | string
  | RefObject<T | undefined | null>

/**
 * Custom hook to retrieve and manage an HTML element reference by its ID or a React ref object.
 */
export function useHtmlElement<T extends HTMLElement>(idOrRef: IdOrRef<T>) {
  const [element, setElement] = useState<T>()

  useEffect(() => {
    if (typeof idOrRef === 'string') {
      const el = document.getElementById(idOrRef) as T

      setElement(el)
    } else if (idOrRef.current) {
      setElement(idOrRef.current)
    }
  }, [idOrRef])

  return element
}
