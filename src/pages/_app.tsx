import 'reflect-metadata'

import '~/styles/globals.scss'

import 'nprogress/nprogress.css'
import '@fortawesome/fontawesome-free/css/all.css'

import type {AppProps} from 'next/app'

import React from 'react'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import NProgress from 'nprogress'
import Router from 'next/router'
import {appWithTranslation} from 'next-i18next'
import {ToastProvider} from 'react-toast-notifications'
import {i18n} from '~/next-i18next.config'
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
  return (
    <Provider store={store}>
      <AppHead {...pageProps.head} />

      <ToastProvider {...settings.toast}>
        <AppProvider>
          <Component {...pageProps} />

          <CookiePopup />
        </AppProvider>
      </ToastProvider>
    </Provider>
  )
}

export default appWithTranslation(App, {i18n})
