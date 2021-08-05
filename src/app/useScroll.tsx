import {useEffect, useMemo, useState} from 'react'

interface HookOptions {
  scrollableElement?: Element
  asBottomReference?: boolean
}

interface ScrollListener extends ScrollListenerOptions {
  state?: ScrollListenerEvent
}

interface ScrollListenerOptions {
  id?: string
  offset?: number
  once?: boolean
  position?: 'top' | 'bottom'
  callback: (event: ScrollListenerEvent) => void
}

interface ScrollListenerEvent {
  position: ScrollCoordination
  speed: ScrollCoordination
  target: 'below' | 'above'
}

interface ScrollCoordination {
  x: number
  y: number
}

export function useScroll(options?: HookOptions) {
  const listeners: ScrollListener[] = []
  const scrollPosition: ScrollCoordination = {x: 0, y: 0}
  const scrollSpeed: ScrollCoordination = {x: 0, y: 0}

  const [scrollPositionX, setScrollPositionX] = useState(0)
  const [scrollPositionY, setScrollPositionY] = useState(0)

  const [scrollSpeedX, setScrollSpeedX] = useState(0)
  const [scrollSpeedY, setScrollSpeedY] = useState(0)

  const getBottomOffset = () =>
    options?.asBottomReference ? window.innerHeight : 0

  const getPositionByDirection = (direction: keyof ScrollCoordination) => {
    const el = options?.scrollableElement ?? document.documentElement

    const coordination: ScrollCoordination = {
      x: el.scrollLeft,
      y: el.scrollTop,
    }

    coordination.y += getBottomOffset()

    return coordination[direction]
  }

  const onCross = (options: ScrollListenerOptions) => listeners.push(options)

  const onCrossTopElement = (
    id: string,
    callback: (event: ScrollListenerEvent) => void
  ) => listeners.push({id, callback, position: 'top'})

  const onCrossBottomElement = (
    id: string,
    callback: (event: ScrollListenerEvent) => void
  ) => listeners.push({id, callback, position: 'bottom'})

  const onceCrossTopElement = (
    id: string,
    callback: (event: ScrollListenerEvent) => void
  ) => listeners.push({id, callback, position: 'top', once: true})

  const onceCrossBottomElement = (
    id: string,
    callback: (event: ScrollListenerEvent) => void
  ) => listeners.push({id, callback, position: 'bottom', once: true})

  const applyState = (listener: ScrollListener) => {
    let targetPosition = 0
    const offset = listener.offset ?? 0
    const yPosition = getPositionByDirection('y')

    if (listener.id) {
      const el = document.getElementById(listener.id)

      targetPosition =
        scrollPositionY -
        getBottomOffset() +
        (el?.getBoundingClientRect()[listener.position ?? 'top'] ?? 0)
    }

    listener.state = {
      position: scrollPosition,
      speed: scrollSpeed,
      target: targetPosition + offset <= yPosition ? 'above' : 'below',
    }
  }

  const scrollTo = (position: number) => {
    window?.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  const scrollToCoordination = (coordination: ScrollCoordination) =>
    window?.scrollTo({
      top: coordination.y,
      left: coordination.x,
      behavior: 'smooth',
    })

  const scrollToElement = (id: string, offset = 0) => {
    const el = document.getElementById(id)
    const reference = options?.asBottomReference ? 'bottom' : 'top'
    const y = el?.getBoundingClientRect()[reference] ?? 0

    scrollTo(y + scrollPositionY - getBottomOffset() + offset)
  }

  const scrollEvent = async () => {
    scrollSpeed.x = getPositionByDirection('x') - scrollPosition.x
    scrollSpeed.y = getPositionByDirection('y') - scrollPosition.y

    scrollPosition.x = getPositionByDirection('x')
    scrollPosition.y = getPositionByDirection('y')

    setScrollPositionX(scrollPosition.x)
    setScrollPositionY(scrollPosition.y)
    setScrollSpeedX(scrollSpeed.x)
    setScrollSpeedY(scrollSpeed.y)

    listeners.forEach((it, i) => {
      const oldTarget = it.state?.target
      applyState(it)
      const hasCrossed = oldTarget && it.state?.target !== oldTarget

      if (hasCrossed) {
        if (it.state) {
          it.callback(it.state)
        }

        if (it.once) {
          listeners.splice(i, 1)
        }
      }
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent)

    return () => {
      document.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return useMemo(
    () => ({
      scrollPositionX,
      scrollPositionY,
      scrollSpeedX,
      scrollSpeedY,
      onCross,
      onCrossTopElement,
      onCrossBottomElement,
      onceCrossTopElement,
      onceCrossBottomElement,
      scrollTo,
      scrollToCoordination,
      scrollToElement,
    }),
    [scrollPositionX, scrollPositionY, scrollSpeedX, scrollSpeedY]
  )
}
