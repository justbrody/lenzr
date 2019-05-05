/* eslint-env jest */
import React from 'react'
import getDisplayName from './getDisplayName'
const WeirdComponent = () => <div />

it('Get the display name of a named component', () => {
  expect(getDisplayName(WeirdComponent)).toBe('WeirdComponent')
})

it('Get the display name when explicitly set', () => {
  WeirdComponent.displayName = 'Weird Comp'
  expect(getDisplayName(WeirdComponent)).toBe('Weird Comp')
})

it('Default display name of a anomynous component', () => {
  expect(getDisplayName(() => <div />)).toBe('Component')
})

it('Default display name of a string component', () => {
  expect(getDisplayName('div')).toBe('div')
})
