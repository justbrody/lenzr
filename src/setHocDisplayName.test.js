/* eslint-env jest */
import React from 'react'
import setHocDisplayName from './setHocDisplayName'
import getDisplayName from './getDisplayName'

it('Set HOC name for HOC`ed component', () => {
  const WeirdComponent = () => <div />

  const WithHocWeirdComp = setHocDisplayName('HOC', WeirdComponent)(
    WeirdComponent
  )

  expect(getDisplayName(WithHocWeirdComp)).toBe('HOC(WeirdComponent)')
})
it('Set HOC name for HOC`ed component', () => {
  const withId = Component => () => <Component id={1} />
  const WeirdComponent = () => <div />
  const WeirdComponentWithID = withId(WeirdComponent)

  const WithHocWeirdComp = setHocDisplayName('HOC', WeirdComponent)(
    WeirdComponentWithID
  )

  expect(getDisplayName(WithHocWeirdComp)).toBe('HOC(WeirdComponent)')
})
