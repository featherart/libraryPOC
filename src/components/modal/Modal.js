import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './modal.less'

const InnerContent = ({
  title,
  content,
  close,
  onCancel,
  onConfirm,
  actions
}) => {
  return ReactDOM.createPortal(
    <div className={'modalContainer'}>
      <div className={'modalBody'}>
        <header className={'modalTitle'}>
          <span>
            {title}
          </span>
          <span className={'closeX'} onClick={() => close(false)}>
            ✕
          </span>
        </header>
        <div className={'modalContent'}>
          {content}
        </div>
        <div className={'modalActions'}>
          {onCancel &&
            <button onClick={() => close(false)} className={'cancelButton'}>
              Cancel
            </button>}
          {onConfirm &&
            <button onClick={onConfirm} className={'confirmButton'}>
              Confirm
            </button>}
        </div>
      </div>
    </div>,
    document.body
  )
}

export const Modal = ({
  openMessage,
  title,
  content,
  onConfirm,
  onCancel,
  actions
}) => {
  const [isShown, toggleShown] = useState(false)
  return (
    <div>
      {!isShown &&
        <button
          className={'confirmButton'}
          onClick={() => toggleShown(!isShown)}
        >
          {openMessage || 'Open'}
        </button>}
      {isShown &&
        <InnerContent
          close={toggleShown}
          title={title}
          content={content}
          onConfirm={onConfirm}
          onCancel={onCancel}
          actions={actions}
        />}
    </div>
  )
}
