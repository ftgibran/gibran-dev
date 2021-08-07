import {MutableRefObject, useEffect, useMemo, useState} from 'react'

export type ScrollListenerName =
  | 'move'
  | 'move-up'
  | 'move-down'
  | 'complete'
  | 'cross'
export type ScrollListenerTarget = 'below' | 'above'
export type ScrollListenerPositionReference = 'top' | 'bottom'
export type ScrollListenerCallback = (event: ScrollListenerEvent) => void

export interface HookOptions {
  asBottomReference?: boolean
  containerRef?: MutableRefObject<HTMLElement>
}

export interface ScrollListener<
  T extends ScrollListenerName = ScrollListenerName
> {
  name: ScrollListenerName
  options: ScrollListenerOptions<T>
  current: ScrollListenerEvent
}

export interface ScrollListenerOptions<T extends ScrollListenerName> {
  once?: boolean
  id?: T extends 'cross' ? string : undefined
  offset?: T extends 'cross' ? number : undefined
  positionReference?: T extends 'cross'
    ? ScrollListenerPositionReference
    : undefined
  callback: ScrollListenerCallback
}

export interface ScrollListenerEvent {
  position: ScrollCoordination
  speed: ScrollCoordination
  target?: ScrollListenerTarget
  isBelow: () => boolean
  isAbove: () => boolean
}

export interface ScrollCoordination {
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

  useEffect(() => {
    const el = isDocument() ? window : getContainer()

    el.addEventListener('scroll', scrollEvent)

    return () => {
      el.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  const getContainer = () =>
    options?.containerRef?.current ?? document.documentElement

  const getBottomOffset = () =>
    options?.asBottomReference ? getClientHeight() : 0

  const isDocument = () => getContainer() === document.documentElement

  const getClientTop = () =>
    isDocument() ? 0 : getContainer().getBoundingClientRect().y

  const getClientHeight = () =>
    isDocument() ? window.innerHeight : getContainer().clientHeight

  const getPositionByDirection = (direction: keyof ScrollCoordination) => {
    const coordination: ScrollCoordination = {
      x: getContainer().scrollLeft,
      y: getContainer().scrollTop,
    }

    coordination.y += getBottomOffset()

    return coordination[direction]
  }

  const scrollTo = (position: number) => {
    getContainer().scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  const scrollToCoordination = (coordination: ScrollCoordination) =>
    getContainer().scrollTo({
      top: coordination.y,
      left: coordination.x,
      behavior: 'smooth',
    })

  const scrollToElement = (id: string, offset = 0) => {
    const el = document.getElementById(id)
    const reference = options?.asBottomReference ? 'bottom' : 'top'
    const y = el?.getBoundingClientRect()[reference] ?? 0

    scrollTo(y + scrollPositionY - getBottomOffset() - getClientTop() + offset)
  }

  const onMove = (callback: ScrollListenerCallback) =>
    addEventListener('move', {callback})

  const onceMove = (callback: ScrollListenerCallback) =>
    addEventListener('move', {once: true, callback})

  const onMoveUp = (callback: ScrollListenerCallback) =>
    addEventListener('move-up', {callback})

  const onceMoveUp = (callback: ScrollListenerCallback) =>
    addEventListener('move-up', {once: true, callback})

  const onMoveDown = (callback: ScrollListenerCallback) =>
    addEventListener('move-down', {callback})

  const onceMoveDown = (callback: ScrollListenerCallback) =>
    addEventListener('move-down', {once: true, callback})

  const onComplete = (callback: ScrollListenerCallback) =>
    addEventListener('complete', {callback})

  const onceComplete = (callback: ScrollListenerCallback) =>
    addEventListener('complete', {once: true, callback})

  const onCross = (options: ScrollListenerOptions<'cross'>) =>
    addEventListener('cross', options)

  const onCrossTopElement = (id: string, callback: ScrollListenerCallback) =>
    addEventListener('cross', {id, callback, positionReference: 'top'})

  const onCrossBottomElement = (id: string, callback: ScrollListenerCallback) =>
    addEventListener('cross', {id, callback, positionReference: 'bottom'})

  const onceCrossTopElement = (id: string, callback: ScrollListenerCallback) =>
    addEventListener('cross', {
      id,
      callback,
      positionReference: 'top',
      once: true,
    })

  const onceCrossBottomElement = (
    id: string,
    callback: ScrollListenerCallback
  ) =>
    addEventListener('cross', {
      id,
      callback,
      positionReference: 'bottom',
      once: true,
    })

  function addEventListener<T extends ScrollListenerName>(
    name: T,
    options: ScrollListenerOptions<T>
  ) {
    const state = buildCurrentState(name, options)
    const listener: ScrollListener = {name, options, current: state}

    listeners.push(listener)

    return listener
  }

  const removeEventListener = (listener: ScrollListener) => {
    const i = listeners.findIndex((it) => it === listener)
    if (i >= 0) listeners.splice(i, 1)
  }

  function buildCurrentState<T extends ScrollListenerName>(
    name: T,
    options: ScrollListenerOptions<T>
  ): ScrollListenerEvent {
    let targetPosition = 0
    const offset = options.offset ?? 0

    if (options.id) {
      const el = document.getElementById(options.id)

      targetPosition += scrollPosition.y
      targetPosition -= getBottomOffset()
      targetPosition -= getClientTop()
      targetPosition +=
        el?.getBoundingClientRect()[options.positionReference ?? 'top'] ?? 0
    }

    let target: ScrollListenerTarget | undefined

    if (name === 'cross') {
      target = targetPosition + offset <= scrollPosition.y ? 'above' : 'below'
    }

    return {
      position: scrollPosition,
      speed: scrollSpeed,
      target,
      isAbove: () => target === 'above',
      isBelow: () => target === 'below',
    }
  }

  const scrollEvent = () => {
    scrollSpeed.x = getPositionByDirection('x') - scrollPosition.x
    scrollSpeed.y = getPositionByDirection('y') - scrollPosition.y

    scrollPosition.x = getPositionByDirection('x')
    scrollPosition.y = getPositionByDirection('y')

    setScrollPositionX(scrollPosition.x)
    setScrollPositionY(scrollPosition.y)
    setScrollSpeedX(scrollSpeed.x)
    setScrollSpeedY(scrollSpeed.y)

    listeners.forEach((it) => {
      switch (it.name) {
        case 'move':
          callbackEvent(it)
          break
        case 'move-up':
          moveUpEvent(it)
          break
        case 'move-down':
          moveDownEvent(it)
          break
        case 'complete':
          completeEvent(it)
          break
        case 'cross':
          crossEvent(it)
          break
      }
    })
  }

  const callbackEvent = (listener: ScrollListener) => {
    listener.options.callback(listener.current)

    if (listener.options.once) {
      removeEventListener(listener)
    }
  }

  const moveUpEvent = (listener: ScrollListener) => {
    if (listener.current.speed.y > 0) {
      callbackEvent(listener)
    }
  }

  const moveDownEvent = (listener: ScrollListener) => {
    if (listener.current.speed.y < 0) {
      callbackEvent(listener)
    }
  }

  const completeEvent = (listener: ScrollListener) => {
    if (
      listener.current.position.y >=
      getContainer().scrollHeight - getClientHeight() + getBottomOffset()
    ) {
      callbackEvent(listener)
    }
  }

  const crossEvent = (listener: ScrollListener) => {
    const oldTarget = listener.current.target
    listener.current = buildCurrentState(listener.name, listener.options)

    const hasCrossed = listener.current.target !== oldTarget

    if (hasCrossed) callbackEvent(listener)
  }

  return useMemo(
    () => ({
      scrollPositionX,
      scrollPositionY,
      scrollSpeedX,
      scrollSpeedY,
      scrollTo,
      scrollToCoordination,
      scrollToElement,
      onMove,
      onceMove,
      onMoveUp,
      onceMoveUp,
      onMoveDown,
      onceMoveDown,
      onComplete,
      onceComplete,
      onCross,
      onCrossTopElement,
      onCrossBottomElement,
      onceCrossTopElement,
      onceCrossBottomElement,
      addEventListener,
      removeEventListener,
    }),
    [scrollPositionX, scrollPositionY, scrollSpeedX, scrollSpeedY]
  )
}
