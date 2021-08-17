import React from 'react'
import HomeView from '~/src/pages'
import {render} from '~test/testUtils'

describe('Home page', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(<HomeView />)
    expect(asFragment()).toMatchSnapshot()
  })
})
