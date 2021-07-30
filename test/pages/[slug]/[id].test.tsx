import React from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '../../testUtils'
import CharacterView from '../../../src/pages/[slug]/[id]'

describe('Character Page', () => {
  const mockStore = configureStore<RootState>()

  const store = mockStore({
    app: {
      language: 'en-US',
      isDark: false,
      favorites: [],
      editedChars: [],
    },
  })

  it('matches snapshot', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <CharacterView />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
