/* eslint-env jest */
import React from 'react'
import getDisplayName from './getDisplayName'

it('Get the display name of a named component', () => {
  const WeirdComponent = () => <div />
  expect(getDisplayName(WeirdComponent)).toBe('WeirdComponent')
})

it('Get the display name when explicitly set', () => {
  const WeirdComponent = () => <div />
  WeirdComponent.displayName = 'Weird Comp'
  expect(getDisplayName(WeirdComponent)).toBe('Weird Comp')
})

it('Default display name of a anomynous component', () => {
  expect(getDisplayName(() => <div />)).toBe('Component')
})

it('Default display name of a string component', () => {
  expect(getDisplayName('div')).toBe('div')
})
