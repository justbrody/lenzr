/* eslint-env jest */
import { view, set, over, lensProp } from 'ramda'
import { inGlobalStateLens } from './globalStateLens'

it('Gets the global state', () => {
  const tokenLens = lensProp('token')
  const globalState = {
    store: {
      state: { token: 'HET_TOKEN' }
    }
  }

  const tokenLensInGlobal = inGlobalStateLens(tokenLens)

  expect(view(tokenLensInGlobal, globalState)).toBe('HET_TOKEN')
})

it('Sets in the global state', () => {
  const tokenLens = lensProp('token')
  const globalState = {
    store: {
      state: { token: 'HET_TOKEN' }
    }
  }

  const tokenLensInGlobal = inGlobalStateLens(tokenLens)

  expect(set(tokenLensInGlobal, 'NEW_TOKEN', globalState)).toStrictEqual({
    store: {
      state: { token: 'NEW_TOKEN' }
    }
  })
})

it('Runs a function over the lens value in the global state', () => {
  const tokenLens = lensProp('token')
  const globalState = {
    store: {
      state: { token: 'HET_TOKEN' }
    }
  }

  const tokenLensInGlobal = inGlobalStateLens(tokenLens)

  expect(
    over(tokenLensInGlobal, token => token + token, globalState)
  ).toStrictEqual({
    store: {
      state: { token: 'HET_TOKENHET_TOKEN' }
    }
  })
})
