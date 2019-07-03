import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../Button'
import './modal.less'

const InnerContent = ({
  title,
  content,
  closeModal,
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
          <span className={'closeX'} onClick={() => closeModal(false)}>
            ✕
          </span>
        </header>
        <div className={'modalContent'}>
          {content}
        </div>
        <div className={'modalActions'}>
          {onCancel &&
            <Button flat neutral onClick={() => closeModal(false)}>
              Cancel
            </Button>}
          {onConfirm &&
            <Button primary onClick={onConfirm}>
              Confirm
            </Button>}
        </div>
      </div>
    </div>,
    document.body
  )
}

export const Modal = ({
  trigger,
  triggerMessage,
  title,
  content,
  onConfirm,
  onCancel,
  actions
}) => {
  const [isShown, toggleShown] = React.useState(false)
  const Trigger = () =>
    trigger === 'button'
      ? <Button primary onClick={() => toggleShown(true)}>
          {triggerMessage}
        </Button>
      : <span onClick={() => toggleShown(true)}>{triggerMessage}</span>

  return (
    <div>
      {!isShown &&
        <Trigger />
      }
      {isShown &&
        <InnerContent
          closeModal={toggleShown}
          title={title}
          content={content}
          onConfirm={onConfirm}
          onCancel={onCancel}
          actions={actions}
        />}
    </div>
  )
}
