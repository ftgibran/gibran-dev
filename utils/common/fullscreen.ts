/**
 * Attempts to enable fullscreen mode for the specified element. If no element is specified,
 * it defaults to the document's root element. The method handles browser compatibility
 * by checking for specific requestFullscreen implementations.
 */
export function enterFullscreen(element = document.documentElement) {
  const el = element as any

  if (document.fullscreenElement) {
    return
  }

  try {
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if (el.mozRequestFullScreen) {
      // Firefox
      el.mozRequestFullScreen()
    } else if (el.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      el.webkitRequestFullscreen()
    } else if (el.msRequestFullscreen) {
      // IE/Edge
      el.msRequestFullscreen()
    }
  } catch {
    // do nothing
  }
}

/**
 * Exits the current fullscreen mode if the document is in fullscreen.
 * It handles browser-specific implementations for exiting fullscreen.
 * If there is no active fullscreen element, the function does nothing.
 */
export function exitFullscreen() {
  const el = document as any

  if (!document.fullscreenElement) {
    return
  }

  try {
    if (
      document.fullscreenElement ||
      (document as any)['webkitFullscreenElement'] ||
      (document as any)['mozFullScreenElement']
    ) {
      if (el.exitFullscreen) {
        el.exitFullscreen()
      } else if (el.mozCancelFullScreen) {
        // Firefox
        el.mozCancelFullScreen()
      } else if (el.webkitExitFullscreen) {
        // Chrome, Safari, and Opera
        el.webkitExitFullscreen()
      } else if (el.msExitFullscreen) {
        // IE/Edge
        el.msExitFullscreen()
      }
    }
  } catch {
    // do nothing
  }
}
