/**
 * A function that enables the "prevent close" behavior for the current browser window.
 * When this function is called, it attaches an `onbeforeunload` event listener to the window.
 * This event listener triggers a confirmation dialog whenever the user attempts to close,
 * reload, or navigate away from the current page, helping to prevent accidental loss of data or progress.
 */
export const enablePreventClose = () => {
  window.onbeforeunload = (e) => {
    e.preventDefault()
    e.returnValue = ''

    return false
  }
}

/**
 * Disables the prevention of closing or navigating away from the current page by removing
 * any custom `onbeforeunload` event handler. This effectively allows the user to close
 * or leave the page without triggering a confirmation prompt or other interaction.
 */
export const disablePreventClose = () => {
  window.onbeforeunload = null
}
