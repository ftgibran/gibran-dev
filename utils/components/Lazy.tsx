'use client'
import { useMountEffect } from '@utils/hooks/react/effect/useMountEffect'
import { ReactNode, useState } from 'react'

export interface LazyProps {
  isDisabled?: boolean
  children?: ReactNode
  fallback?: ReactNode
}

export const Lazy = (props: LazyProps) => {
  const { children, isDisabled, fallback } = props

  const [isMounted, setMountedState] = useState(isDisabled)

  useMountEffect(() => {
    setMountedState(true)
  })

  return <>{isMounted ? children : fallback}</>
}

Lazy.displayName = 'Lazy'
