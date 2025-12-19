'use client'
import { useEffect } from 'react'

/**
 * A custom hook that attaches a scroll event listener to a specified element or the global window object.
 */
export function useOnScroll(
  el: HTMLElement | Window | undefined,
  cb: EventListenerOrEventListenerObject,
) {
  useEffect(() => {
    const element = el ?? window

    element.addEventListener('scroll', cb)

    return () => element.removeEventListener('scroll', cb)
  }, [cb, el])
}

export function useOnWindowScroll(cb: EventListenerOrEventListenerObject) {
  return useOnScroll(undefined, cb)
}
