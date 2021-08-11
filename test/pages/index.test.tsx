import React from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '../testUtils'
import HomeView from '../../src/pages'

describe('Home page', () => {
  const mockStore = configureStore<RootState>()

  const store = mockStore({
    app: {
      isDark: false,
    },
  })

  it('matches snapshot', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <HomeView />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
