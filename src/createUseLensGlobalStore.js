import { useContext } from 'react'
import { pick } from 'ramda'

/**
 * React hook for using lens functions on the global store.
 * The hook will return the 3 lens function view/set/over.
 * The lens functions will work on the global store in thee context.
 *
 * @param {React.Context} ctx - The global store context
 */
export const createUseLensGlobalStore = ctx => () =>
  pick(['view', 'set', 'over'], useContext(ctx))
