export function isEnum(obj: unknown): obj is object {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.values(obj).some(
      (value) => typeof value === 'string' || typeof value === 'number',
    )
  )
}
