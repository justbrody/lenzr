import { is } from 'ramda'

/**
 * Get the display name for the given component.
 * @function
 * @param {React.Component} comp - The react component
 * @return The display name for the component
 */
const getDisplayName = comp =>
  (is(String, comp) && comp) || comp.displayName || comp.name || 'Component'

export default getDisplayName
