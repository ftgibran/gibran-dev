/**
 * Determines whether the current browser is Safari.
 *
 * This function checks the user agent string to identify if the browser
 * is Safari. It avoids detection if Chrome or Android are present in the
 * user agent string, as those can sometimes include "Safari" within their
 * user agent strings incorrectly.
 *
 * Note: This function relies on the global `navigator` object and its `userAgent`
 * property. If executed in an environment where `navigator` is undefined (e.g., server-side),
 * the function will return `false`.
 */
export const isSafari = () => {
  if (typeof navigator !== 'undefined') {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  }

  return false
}
