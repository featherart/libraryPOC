import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Modal } from '../../../components/Modal'
import { theme } from '../theme'

const code = `
<Modal />
`.trim()

export const ModalPage = () => {
  return (
    <div>
      Modal
      <LiveProvider code={code} theme={theme} scope={{Modal}}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  )
}
