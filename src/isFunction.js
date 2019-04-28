/**
 * Check if the given object is a function.
 * @functions
 * @param {object} f - The function to Check
 * @returns {boolean} True of false
 */
const isFunction = f => f && {}.toString.call(f) === '[object Function]'

export default isFunction
