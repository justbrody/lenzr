# lenzr

![GitHub package.json version](https://img.shields.io/github/package-json/v/justbrody/lenzr.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/justbrody/lenzr.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/justbrody/lenzr/badge.svg?branch=master)](https://coveralls.io/github/justbrody/lenzr?branch=master)
[![Top languages](https://img.shields.io/github/languages/top/justbrody/lenzr.svg)](https://github.com/justbrody/lenzr/)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/justbrody/lenzr.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/lenzr@latest.svg)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/lenzr.svg)

Global state for React using lenses.

Full example:
```javascript
import React from 'react'
import lenzr, { lensProp } from 'lenzr'

const { withGlobalStore, connect } = lenzr({
  token: 'asdfd',
  count: 10
})

const countLens = lensProp('count')

const Counter = ({ count, set }) => {
  expect(count).toBe(10)

  return <div onClick={() => set(countLens, count + 1)}>{count}</div>
}

const ConnectedCounter = connect({ count: countLens })(Counter)

const App = withGlobalStore(() => (
  <div>
    <h1>Counter</h1>
    <ConnectedCounter />
  </div>
))
```
