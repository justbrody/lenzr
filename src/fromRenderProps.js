import React from 'react'

import setHocDisplayName from './setHocDisplayName'

const fromRenderProps = (
  RenderPropsComponent,
  propsMapper,
  renderPropName = 'children'
) => BaseComponent => {
  const baseFactory = React.createFactory(BaseComponent)
  const renderPropsFactory = React.createFactory(RenderPropsComponent)

  const FromRenderProps = ownerProps =>
    renderPropsFactory({
      [renderPropName]: (...props) =>
        baseFactory({ ...ownerProps, ...propsMapper(...props) })
    })

  if (process.env.NODE_ENV !== 'production') {
    return setHocDisplayName('fromRenderProps', BaseComponent)(FromRenderProps)
  }

  return FromRenderProps
}

export default fromRenderProps
