'use client'
import { useSyncExternalStore } from 'react'

/**
 * True once the window `load` event has fired (or immediately, if it already
 * had by the time this mounted).
 *
 * Used to keep background video off the critical path: a decorative 870 KB
 * .webm that starts fetching during the initial load competes for bandwidth
 * with the LCP image and costs seconds of paint time.
 */
export function useIsPageLoaded() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener('load', onStoreChange)

  return () => window.removeEventListener('load', onStoreChange)
}

function getSnapshot() {
  return document.readyState === 'complete'
}

function getServerSnapshot() {
  return false
}
