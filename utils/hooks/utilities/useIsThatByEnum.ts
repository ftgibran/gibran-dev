'use client'
import { camelCase, values } from 'lodash'
import { useMemo } from 'react'
import type { CamelCase } from 'type-fest'

export type IsThatSet<S extends string> = {
  [K in S as CamelCase<`is-${K}`>]: boolean
}

/**
 * A hook that generates a set of boolean flags based on the provided state and enumeration object.
 */
export function useIsThatByEnum<S extends string>(
  state: S | undefined,
  EnumObject: object,
) {
  const set = useMemo(() => {
    return values(EnumObject).reduce(
      (prev, current) => ({
        ...prev,
        [camelCase(`is-${current}`)]: state === current,
      }),
      {} as IsThatSet<S>,
    )
  }, [EnumObject, state])

  return useMemo(() => ({ ...set }), [set])
}
