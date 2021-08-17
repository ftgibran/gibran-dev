import React from 'react'
import configureStore from 'redux-mock-store'
import {ToastProvider} from 'react-toast-notifications'
import {Provider} from 'react-redux'
import {render} from '@testing-library/react'

const mockStore = configureStore<RootState>()

const store = mockStore({
  app: {
    isDark: false,
  },
})

const Providers = ({children}: any) => {
  return (
    <Provider store={store}>
      <ToastProvider>{children}</ToastProvider>
    </Provider>
  )
}

const customRender = (ui: any, options = {}) =>
  render(ui, {wrapper: Providers, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
