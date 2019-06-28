import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Modal } from '../../../components/Modal'



export const ModalPage = () => {
  return (
    <div>
      Modal
      <LiveProvider code={example} scope={{React: React}}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  )
}
