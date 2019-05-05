/* eslint-env jest */
import React from 'react'
import { lensProp } from 'ramda'
import { mount } from 'enzyme'
import { createConnect } from './createConnect'

const Counter = ({ count }) => <div>{count}</div>

it('Can connect to a React context', () => {
  const Ctx = React.createContext()
  const connect = createConnect(Ctx)
  const ConnectedCounter = connect({ count: lensProp('count') })(Counter)

  const wrapper = mount(
    <Ctx.Provider value={{ state: { count: 10 } }}>
      <ConnectedCounter />
    </Ctx.Provider>
  )

  const count = wrapper
    .first()
    .children()
    .first()
    .props().count

  expect(count).toBe(10)
})
