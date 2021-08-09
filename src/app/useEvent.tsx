import {useMemo} from 'react'
import TagManager from 'react-gtm-module'
import {useRouter} from 'next/router'

export function useEvent() {
  const {pathname} = useRouter()

  const page = pathname

  const navigateEvent = (name: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'navigation',
        action: 'click',
        label: `Navigated to ${name}`,
      },
    })
  }

  const scrollEvent = (name: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'navigation',
        action: 'scroll',
        label: `Scrolled to ${name}`,
      },
    })
  }

  const clickToGoToNextSectionEvent = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'navigation',
        action: 'click',
        label: 'Clicked to go to next section',
      },
    })
  }

  const openExternalLinkEvent = (url: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'external-link',
        action: 'click',
        label: `Open external link: ${url}`,
      },
    })
  }

  const toggleDarkModeEvent = (isDark: boolean) => {
    const label = isDark ? 'Toggled into dark mode' : 'Toggled into light mode'

    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'options',
        action: 'click',
        label,
      },
    })
  }

  const changeLocaleEvent = (lang: Language) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'options',
        action: 'click',
        label: `Changed to locale ${lang}`,
      },
    })
  }

  const openMenuEvent = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'options',
        action: 'click',
        label: 'Open menu',
      },
    })
  }

  const submitContactEvent = (tag?: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'form',
        action: 'submit',
        label: `Submitted contact form${tag ? ` (${tag})` : ''}`,
      },
    })
  }

  const clickOnDontClickCorner = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'customEvent',
        page,
        category: 'easter-egg',
        action: 'click',
        label: 'Clicked on "Don\'t Click" corner',
      },
    })
  }

  return useMemo(
    () => ({
      navigateEvent,
      scrollEvent,
      clickToGoToNextSectionEvent,
      openExternalLinkEvent,
      toggleDarkModeEvent,
      changeLocaleEvent,
      openMenuEvent,
      submitContactEvent,
      clickOnDontClickCorner,
    }),
    []
  )
}
