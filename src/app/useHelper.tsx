import {useMemo} from 'react'

export function useHelper() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  return useMemo(
    () => ({
      sleep,
    }),
    []
  )
}
