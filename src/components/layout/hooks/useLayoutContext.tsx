import { SystemStyleObject } from '@chakra-ui/react'
import { useMemo } from 'react'

import { _useLayoutContext } from '@/components/layout/hooks/useLayout'

export const layoutContextParamsNames: ReadonlyArray<
  keyof LayoutContextParams
> = ['fillViewport', 'includeNavbar', 'centerContent']

export interface LayoutContextParams {
  fillViewport?: boolean
  includeNavbar?: boolean
  centerContent?: boolean
}

export function useLayoutContext(params: LayoutContextParams = {}) {
  const { fillViewport, includeNavbar = true, centerContent } = params

  const context = _useLayoutContext() ?? {}
  const { navbarHeight, contentWidth, windowHeight } = context

  const offset = useMemo(
    () => (includeNavbar ? navbarHeight : 0),
    [includeNavbar, navbarHeight],
  )

  const contentHeight = useMemo(
    () => windowHeight - offset,
    [offset, windowHeight],
  )

  const contentRatio = useMemo(
    () => contentWidth / contentHeight,
    [contentHeight, contentWidth],
  )

  const baseProps = useMemo<SystemStyleObject>(
    () => ({
      display: 'flex',
      flexFlow: 'column',
    }),
    [],
  )

  const centerProps = useMemo<SystemStyleObject>(
    () => ({
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    [],
  )

  const viewportProps = useMemo<SystemStyleObject>(
    () => ({ minH: `calc(100vh - ${offset}px)` }),
    [offset],
  )

  const layoutContextProps = useMemo<SystemStyleObject>(
    () => ({
      ...baseProps,
      ...(fillViewport && viewportProps),
      ...(centerContent && centerProps),
    }),
    [baseProps, centerContent, centerProps, fillViewport, viewportProps],
  )

  return {
    offset,

    contentHeight,
    contentRatio,

    viewportProps,
    centerProps,
    layoutContextProps,

    ...context,
  }
}
