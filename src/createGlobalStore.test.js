/* eslint-env jest */
import React from 'react'
import { mount } from 'enzyme'
import lenzr, { lensProp } from './'

it('Can create a global store and connect to it', () => {
  const { connect, withGlobalStore } = lenzr({ token: 'asdfd', count: 10 })

  const Counter = ({ count }) => {
    expect(count).toBe(10)

    return <div> {count} </div>
  }
  const ConnectedCounter = connect({ count: lensProp('count') })(Counter)

  const App = withGlobalStore(({ children }) => <div>{children}</div>)

  mount(
    <App>
      <ConnectedCounter />
    </App>
  )
})
