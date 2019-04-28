import React from 'react'
import { identity, applySpec } from 'ramda'

import { createUseLensGlobalStore } from './createUseLensGlobalStore'
import { createConnect } from './createConnect'
import { createWithGlobalStore } from './createWithGlobalStore'

/**
 * Get the global store object for the given initial state and the context.
 * @param {object} initialState The initial state
 * @param {React.Context} context - The global store context
 */
const getGlobalStore = initialState =>
  applySpec({
    context: identity,
    connect: createConnect,
    withGlobalStore: createWithGlobalStore(initialState),
    useLensGlobalStore: createUseLensGlobalStore
  })

/**
 * This function wil create a new context for global store.
 * It will expose 2 HOC's:
 *  - connect :: For connecting a component to the store
 *  - withGlobalStore :: For adding the provider of the store
 *
 * Hook for lens functions:
 *  - userLensGlobalStore
 *
 * The context of the global store:
 *  - context
 * @function
 * @param {object} initialState The initial state
 */
const createGlobalStore = initialState =>
  getGlobalStore(initialState)(React.createContext())

export default createGlobalStore
