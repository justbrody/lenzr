/* eslint-env jest */
import React from 'react'
import { lensProp } from 'ramda'
import { mount } from 'enzyme'
import { createConnect } from './createConnect'
import { createWithGlobalStore } from './createWithGlobalStore'

it('Can create HOC for providing the global store', () => {
  const Ctx = React.createContext()
  const connect = createConnect(Ctx)
  const withGlobalStore = createWithGlobalStore(
    { token: 'asdfd', count: 10 },
    Ctx
  )
  const Counter = ({ count }) => {
    expect(count).toBe(10)

    return <div>{count} </div>
  }

  const ConnectedCounter = connect({ count: lensProp('count') })(Counter)

  const App = withGlobalStore(({ children }) => <div>{children}</div>)

  mount(
    <App>
      <ConnectedCounter />
    </App>
  )
})
