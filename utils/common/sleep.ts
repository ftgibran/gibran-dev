/**
 * Delays the execution of code for a specified duration.
 */
export function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}
