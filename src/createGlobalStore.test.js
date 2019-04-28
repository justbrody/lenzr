/* eslint-env jest */
import React from 'react'
import { lensProp } from 'ramda'
import { mount } from 'enzyme'
import createGlobalStore from './createGlobalStore'

it('Can create a global store and connect to it', () => {
  const GlobalStore = createGlobalStore({ token: 'asdfd', count: 10 })

  const Counter = ({ count }) => {
    expect(count).toBe(10)

    return <div>{count} </div>
  }
  const ConnectedCounter = GlobalStore.connect({ count: lensProp('count') })(
    Counter
  )

  const App = GlobalStore.withGlobalStore(({ children }) => (
    <div>{children}</div>
  ))

  mount(
    <App>
      <ConnectedCounter />
    </App>
  )
})
