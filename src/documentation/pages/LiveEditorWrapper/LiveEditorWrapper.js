import React, { useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'

const LiveEditorWrapper = ({ component, code, inLine, dark }) => {
  // this causes invariant violation, but why??
  //const [showCode, toggleShowCode] = useState(true)
  return (
    <LiveProvider code={code} scope={component} theme={theme} noInline={inLine}>
      <LivePreview className={'displayArea'} />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  )
}

export { LiveEditorWrapper }
