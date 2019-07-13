import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import { view, set, over, curry, mergeDeepLeft } from 'ramda'

import getDisplayName from './getDisplayName'
import { inGlobalStateLens } from './globalStateLens'

/**
 * This function will create and return a HOC for adding a provider to a component with global state.
 * @param {object} init The initial state
 * @param {React.Context} GlobalStoreProvider The GlobalStoreContext
 */
export const createWithGlobalStore = curry(
  (init, GlobalStoreContext) => (Component, state = {}) => {
    const MemoComponent = React.memo(Component)
    // HOC component for providing the global state to the given component.
    class WithGlobalStore extends React.Component {
      constructor (props) {
        super(props)
        const store = {
          state: mergeDeepLeft(state, init),
          view: lens => view(inGlobalStateLens(lens), this.state),
          set: curry((lens, x) =>
            this.setState(set(inGlobalStateLens(lens), x))
          ),
          over: curry((lens, f) =>
            this.setState(over(inGlobalStateLens(lens), f))
          )
        }
        this.state = { store }
      }

      render () {
        return (
          <GlobalStoreContext.Provider value={this.state.store}>
            <MemoComponent {...this.props} />
          </GlobalStoreContext.Provider>
        )
      }
    }
    // Add a readable name.
    WithGlobalStore.displayName = `WithGlobalStore(${getDisplayName(
      Component
    )})`
    // Add all the non static functions to the HOC.
    hoistNonReactStatic(WithGlobalStore, Component)
    return WithGlobalStore
  }
)
