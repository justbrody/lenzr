import { curry } from 'ramda'

import setDisplayName from './setDisplayName'
import getDisplayName from './getDisplayName'

/**
 * Set the HOC display name for the given component and HOC name.
 * @function
 * @param {String} hocName - The HOC name
 * @param {React.Component} comp - The react component
 */
const setHocDisplayName = curry((hocName, comp) =>
  setDisplayName(`${hocName}(${getDisplayName(comp)})`)
)

export default setHocDisplayName
