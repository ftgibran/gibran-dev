import {i18n as i18next} from 'next-i18next'
import {i18n} from '~/next-i18next.config'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export function serverHelper() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const populateSSRConfig = async (locale?: string, namespaces?: string[]) => {
    if (process.env.NODE_ENV === 'development') {
      await i18next?.reloadResources()
    }

    return await serverSideTranslations(locale ?? '', namespaces, {
      i18n,
    })
  }

  return {
    sleep,
    populateSSRConfig,
  }
}
