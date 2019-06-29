import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import style from './modal.less'

const InnerContent = ({
  title,
  content,
  close,
  onCancel,
  onConfirm,
  actions
}) => {
  return ReactDOM.createPortal(
    <div className={style.modalContainer}>
      <div className={style.modalBody}>
        <header className={style.modalTitle}>
          <span>
            {title}
          </span>
          <span className={style.closeX} onClick={() => close(false)}>
            ✕
          </span>
        </header>
        <div className={style.modalContent}>
          {content}
        </div>
        <div className={style.modalActions}>
          {onCancel &&
            <button onClick={() => close(false)} className={style.cancelButton}>
              Cancel
            </button>}
          {onConfirm &&
            <button onClick={onConfirm} className={style.confirmButton}>
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
          className={style.confirmButton}
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
