# lenzr

![GitHub package.json version](https://img.shields.io/github/package-json/v/justbrody/lenzr.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/justbrody/lenzr.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/justbrody/lenzr/badge.svg?branch=master)](https://coveralls.io/github/justbrody/lenzr?branch=master)
[![Top languages](https://img.shields.io/github/languages/top/justbrody/lenzr.svg)](https://github.com/justbrody/lenzr/)
[![Known Vulnerabilities](https://snyk.io/test/github/justbrody/lenzr/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justbrody/lenzr?targetFile=package.json)
![npm bundle size](https://img.shields.io/bundlephobia/min/lenzr@latest.svg)
![David](https://img.shields.io/david/dev/justbrody/lenzr.svg)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/justbrody/lenzr/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/justbrody/lenzr/?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


Global store for React using lenses.

Full example:
```javascript
import React from 'react'
import lenzr, { lensProp } from 'lenzr'

// First we will set up a new store.
const { withGlobalStore, connect } = lenzr({ count: 10 })

// Create a lens for accessing the count data in the store.
const countLens = lensProp('count')

// A simple component with the count value and a set function to manipulate the store.
const Counter = ({ count, set }) =>
  <div onClick={() => set(countLens, count + 1)}>{count}</div>

// Connect the component to the global store 
// It will provide functions to access the store (set/over/view)
// And will map data from the store throught a lens to props
const ConnectedCounter = connect({ count: countLens })(Counter)

// The App with a HOC to provide the global store.
const App = withGlobalStore(() => (
  <div>
    <h1>Counter</h1>
    <ConnectedCounter />
  </div>
))
```
## Lenzr API
The lenzr function will return an object with the following functions:
 * withGlobalStore: HOC for making the store available for other components.
 * connect: HOC for connection other components to the store.
 * useLensGlobalStore: React Hook with contains functions to operate on the store


## Store operation set/view/over
Both the connect and useLensGlobalStore exposes functions which can be used to operate on the store.

**Important note: 'useLensGlobalStore' will always cause a re-render of the component if the store has changed.**
**If the return value is very expensive, you could wrap it with React.useMemo.**
```javascript
const ConnectedApp = connect()(
  ({set, over, view}) => { 
    ... 
})
const AppWithHook = () => {
  const {set, over, view} = useLensGlobalStore()
  ...
}
```
### Set
With the 'set' function a specific value can be changed or added in the store, using the given lens.
```javascript
const ResetButton = connnect()(({ set }) => {
  const reset = () => set(countLens, 0)
  
  return <button onClick={reset}>Reset</button>
})
```

### Over
Also with the 'over' function can the value be changed in the store, but instead of a value, a function is given.
This function accepts the old value and needs to return the new value.
```javascript
const IncButton = connnect()(({ over }) => {
  const inc = () => over(countLens, x => x + 1)
  
  return <button onClick={inc}>Increment</button>
})
```

### View
With the 'view' function a value in the store can be viewed, it needs a lens to read it from the store.
```javascript
const Counter = connnect()(({ view }) => {
  const count = view(countLens)
  
  return <div>{count}</di>v
})
```
