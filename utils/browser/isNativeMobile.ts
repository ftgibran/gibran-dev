/**
 * Determines if the current device is a native mobile device.
 * This function checks the `navigator.userAgent` property to identify
 * whether the user agent string matches common patterns for mobile devices,
 * such as "Mobi", "Android", "iPhone", "iPad", or "iPod".
 * If `navigator` is undefined (e.g., in server-side execution), it safely returns `false`.
 */
export const isNativeMobile = () => {
  if (typeof navigator !== 'undefined') {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  }

  return false
}
