import { useMemo } from 'react'

export function useCompositeProps<P, K extends keyof P>(
  props: P,
  keys: readonly K[],
) {
  return useMemo(() => {
    const getPartial = (keys: Array<keyof P>) =>
      keys.reduce<Partial<P>>(
        (prev, key) => ({
          ...prev,
          [key]: props[key],
        }),
        {},
      )

    const extractedKeys = Object.keys(props as any).filter((key) =>
      keys.includes(key as K),
    ) as Extract<keyof P, K>[]

    const excludedKeys = Object.keys(props as any).filter(
      (key) => !keys.includes(key as K),
    ) as Exclude<keyof P, K>[]

    return [getPartial(extractedKeys), getPartial(excludedKeys)] as [
      Pick<P, K>,
      Omit<P, K>,
    ]
  }, [keys, props])
}
