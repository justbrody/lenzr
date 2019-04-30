/* eslint-env jest */
import React from 'react'
import fromRenderProps from './fromRenderProps'
import getDisplayName from './getDisplayName'

const WrapperComponent = ({ render }) => <div>{render()}</div>
const Title = () => <h1>Test</h1>
const createWrappedTitle = () =>
  fromRenderProps(WrapperComponent, props => props, 'render')(Title)

it('Check display name after fromRenderProps', () => {
  process.env.NODE_ENV = 'test'

  const WeirdComponent = createWrappedTitle()

  expect(getDisplayName(WeirdComponent)).toBe('fromRenderProps(Title)')
})

it('Check display name after fromRenderProps for production', () => {
  process.env.NODE_ENV = 'production'

  const WeirdComponent = createWrappedTitle()

  expect(getDisplayName(WeirdComponent)).toBe('FromRenderProps')
})
