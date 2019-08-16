import React, { useState } from 'react'
import cx from 'classnames'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'

const LiveEditorWrapper = ({ component, code, inLine, dark, small }) => {
  // this causes invariant violation, but why??
  //const [showCode, toggleShowCode] = useState(true)
  const classes = cx('displayArea', {small}, {dark})
  return (
    <LiveProvider code={code} scope={component} theme={theme} noInline={inLine}>
      <LivePreview className={classes} />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  )
}

export { LiveEditorWrapper }
