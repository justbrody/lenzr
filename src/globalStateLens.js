import { lensPath, pipe } from 'ramda'

/**
 * Lens for zooming in the global state.
 * @function
 */
const globalStateLens = lensPath(['store', 'state'])

/**
 * Create a new lens based on the given lens and globalStateLens.
 * @function
 * @param {function} lens - The lens to zoom into the global state
 * @return {function} Composed lens
 */
export const inGlobalStateLens = lens =>
  pipe(
    lens,
    globalStateLens
  )
