import type { QueryValue } from '@utils/types/QueryValues'

/**
 * Normalizes the given query value into a consistent format.
 * Supports arrays and single values, converting data types based on predefined rules.
 */
export function normalizeQueryValue(val: QueryValue): QueryValue {
  if (val instanceof Array) {
    if (val.length === 0) {
      return null
    }

    if (val.length === 1) {
      return normalize(val[0])
    }

    return val.map(normalize) as QueryValue
  }

  return normalize(val)

  function normalize(val: QueryValue) {
    const isNumber = [
      val !== '',
      val !== true,
      val !== false,
      val !== null,
      !isNaN(Number(val)),
    ]

    if (isNumber.every(Boolean)) {
      return Number(val)
    } else if (val === 'true') {
      return true
    } else if (val === 'false') {
      return false
    } else if (val === 'null') {
      return null
    }

    return val
  }
}
