/* eslint-env jest */
import React, { useEffect, useState } from 'react'
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
  const Counter = ({ count, view, set, over }) => {
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

it('Use lens operation view', () => {
  const Ctx = React.createContext()
  const connect = createConnect(Ctx)
  const dummyLens = lensProp('dummy')
  const withGlobalStore = createWithGlobalStore(
    { token: 'asdfd', dummy: 'Hallo dummy' },
    Ctx
  )
  const Dummy = ({ view }) => {
    expect(view(dummyLens)).toBe('Hallo dummy')

    return <div />
  }

  const ConnectedDummy = connect()(Dummy)

  const App = withGlobalStore(({ children }) => <div>{children}</div>)

  mount(
    <App>
      <ConnectedDummy />
    </App>
  )
})

it('Use lens operation set', () => {
  const Ctx = React.createContext()
  const connect = createConnect(Ctx)
  const dummyLens = lensProp('dummy')
  const withGlobalStore = createWithGlobalStore(
    { token: 'asdfd', dummy: 'Hallo dummy' },
    Ctx
  )
  const Dummy = ({ dummy, set }) => {
    const [first, isFirst] = useState(true)
    useEffect(() => {
      set(dummyLens, 'Hallo Lens')
      isFirst(false)
    }, [])

    !first && expect(dummy).toBe('Hallo Lens')

    return <div />
  }

  const ConnectedDummy = connect({ dummy: dummyLens })(Dummy)

  const App = withGlobalStore(({ children }) => <div>{children}</div>)

  mount(
    <App>
      <ConnectedDummy />
    </App>
  )
})

it('Use lens operation over', () => {
  const Ctx = React.createContext()
  const connect = createConnect(Ctx)
  const dummyLens = lensProp('dummy')
  const withGlobalStore = createWithGlobalStore(
    { token: 'asdfd', dummy: 'Hallo dummy' },
    Ctx
  )
  const Dummy = ({ dummy, over }) => {
    const [first, isFirst] = useState(true)
    useEffect(() => {
      over(dummyLens, s => s.toUpperCase())
      isFirst(false)
    }, [])

    !first && expect(dummy).toBe('HALLO DUMMY')

    return <div>{dummy}</div>
  }

  const ConnectedDummy = connect({ dummy: dummyLens })(Dummy)

  const App = withGlobalStore(({ children }) => <div>{children}</div>)

  mount(
    <App>
      <ConnectedDummy />
    </App>
  )
})
