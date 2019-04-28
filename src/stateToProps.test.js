/* eslint-env jest */
import { lensPath } from 'ramda'
import { stateToProps } from './stateToProps'

it('Converts map function to props', () => {
  const state = { auth: { token: 'token' } }

  const mapToProps = state => ({
    token: state.auth.token
  })

  const props = stateToProps(mapToProps)({ state })

  expect(props).toEqual({ token: 'token' })
})

it('Converts lens object to props', () => {
  const state = { auth: { token: 'token' } }
  const tokenLens = lensPath(['auth', 'token'])
  const mapToProps = { token: tokenLens }

  const props = stateToProps(mapToProps)({ state })

  expect(props).toEqual({ token: 'token' })
})
