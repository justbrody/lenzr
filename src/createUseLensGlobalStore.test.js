/* eslint-env jest */
import { mount } from 'enzyme'
import React from 'react'
import { createUseLensGlobalStore } from './createUseLensGlobalStore'

it('Creates a React Hook', () => {
  const ctx = React.createContext({
    view: () => null,
    set: () => null,
    over: () => null
  })
  const useLensGlobalStore = createUseLensGlobalStore(ctx)

  const DummyComponent = () => {
    const { view, set, over } = useLensGlobalStore()
    view()
    set()
    over()
    return null
  }

  mount(<DummyComponent />)
})
