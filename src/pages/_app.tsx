import 'reflect-metadata'

import '~/styles/globals.scss'

import 'nprogress/nprogress.css'
import '@dev-plus-plus/react-await/styles/effect.css'
import '@fortawesome/fontawesome-free/css/all.css'

import type {AppProps} from 'next/app'

import React, {useEffect} from 'react'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import TagManager from 'react-gtm-module'
import {Provider} from 'react-redux'
import NProgress from 'nprogress'
import BarLoader from 'react-spinners/BarLoader'
import {AwaitProvider} from '@dev-plus-plus/react-await'
import Router from 'next/router'
import {appWithTranslation} from 'next-i18next'
import {ToastProvider} from 'react-toast-notifications'
import {i18n} from '~/next-i18next.config'
import {useEnv} from '~src/app/useEnv'
import {AppHead} from '~src/app/AppHead'
import {AppProvider} from '~src/app/AppProvider'
import {CookiePopup} from '~src/components/utils/CookiePopup'
import {RootStore} from '~src/store/RootStore'

const settings = require('~src/app/settings.json')
const store = createStore(RootStore.reducers, {}, applyMiddleware(thunk))

NProgress.configure(settings.nProgress)

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const App = ({Component, pageProps}: AppProps) => {
  const env = useEnv()

  useEffect(() => {
    TagManager.initialize({gtmId: env.GTM_ID})
  }, [])

  return (
    <Provider store={store}>
      <AppHead {...pageProps.head} />

      <AwaitProvider
        defaultLoadingView={<BarLoader color={env.PALETTE_PRIMARY} />}
      >
        <ToastProvider {...settings.toast}>
          <AppProvider>
            <Component {...pageProps} />

            <CookiePopup />
          </AppProvider>
        </ToastProvider>
      </AwaitProvider>
    </Provider>
  )
}

export default appWithTranslation(App, {i18n})
