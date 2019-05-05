/* eslint-env jest */
import React from 'react'
import setHocDisplayName from './setHocDisplayName'
import getDisplayName from './getDisplayName'

const WeirdComponent = () => {
  return <div />
}

it('Set HOC name for HOC`ed component', () => {
  const WithHocWeirdComp = setHocDisplayName('HOC', WeirdComponent)(
    WeirdComponent
  )

  expect(getDisplayName(WithHocWeirdComp)).toBe('HOC(WeirdComponent)')
})

const ComponentB = () => <div />

it('Set HOC name for HOC`ed component', () => {
  const withId = Component => () => <Component id={1} />
  const ComponentBWithID = withId(ComponentB)

  const WithHocCompB = setHocDisplayName('HOC', ComponentB)(ComponentBWithID)

  expect(getDisplayName(WithHocCompB)).toBe('HOC(ComponentB)')
})
