import {
  view,
  pipe,
  toPairs,
  fromPairs,
  converge,
  head,
  last,
  __,
  pair,
  map
} from 'ramda'

import isFunction from './isFunction'

/**
 * Convert a state-mapper-function to a props object.
 */
export const addStateToProps = mapStateToProps => ({ state, ...rest }) => ({
  ...rest,
  ...(mapStateToProps && mapStateToProps(state))
})

/**
 * Converts an object with the value a lens to an object with the value for that lens.
 */
const addLensesToProps = mapLensesToProps => ({ state, ...rest }) => ({
  ...rest,
  ...pipe(
    toPairs,
    map(
      converge(pair, [
        head,
        pipe(
          last,
          view(__, state)
        )
      ])
    ),
    fromPairs
  )(mapLensesToProps)
})

export const stateToProps = mapStateToProps =>
  isFunction(mapStateToProps)
    ? addStateToProps(mapStateToProps)
    : addLensesToProps(mapStateToProps)
