/**
 * Ensures the input is returned as an array. If the input is already an array, it returns a shallow copy of the array.
 * If the input is a single value, it wraps it in an array. If the input is null or undefined, it returns an empty array.
 */
export function forceArray<T>(input: T | T[] | null | undefined) {
  if (input === null || input === undefined) return []

  if (input instanceof Array) {
    return [...input] as unknown as T[]
  } else {
    return [input] as T[]
  }
}

/**
 * Ensures the input is converted into an array of strings. If the input is already an array,
 * each element of the array is converted to a string. Handles null or undefined input gracefully.
 */
export function forceStringArray<T, U extends string = string>(
  input: T | T[] | null | undefined,
) {
  return forceArray(input).map((val) => `${val}`) as U[]
}

/**
 * Ensures that the input is treated as an array and retrieves the item at the specified index.
 */
export function forceArrayItem<T>(
  input: T | T[] | null | undefined,
  index = 0,
) {
  return forceArray<T>(input)[index] as T | undefined
}
