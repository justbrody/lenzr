import React from 'react'
import { compose } from 'ramda'

import fromRenderProps from './fromRenderProps'
import setHocDisplayName from './setHocDisplayName'
import { stateToProps } from './stateToProps'

/**
 * This function creates a HOC for connect the given global store context to the given Component.
 * Only the props provided through the
 * @param {React.Context} GlobalStoreContext The global store context
 * @function
 * @return connect HOC
 */
export const createConnect = GlobalStoreContext => mapStateToProps => Component =>
  compose(
    setHocDisplayName('connect', Component),
    fromRenderProps(GlobalStoreContext.Consumer, stateToProps(mapStateToProps)), // connect with consumer
    React.memo // Do not unnessasary rerender
  )(Component)
