/* eslint-env jest */
import isFunction from './isFunction'

it('isFunction is a function', () => {
  expect(isFunction(isFunction)).toBeTruthy()
})
it('Arrow function is a function', () => {
  expect(isFunction(() => null)).toBeTruthy()
})
it('Is a function', () => {
  expect(isFunction(function () {})).toBeTruthy()
})
it('Object is not a function', () => {
  expect(isFunction({})).toBeFalsy()
})
it('Primitive is not a function', () => {
  expect(isFunction(1)).toBeFalsy()
})

// it
