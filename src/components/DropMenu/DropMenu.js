import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '../Icon'
import './dropMenu.less'

const DropMenuContainer = ({
  handleHover,
  handleExit,
  handleClick,
  content,
  actions
}) => {
  return (
    <div className='drop-menu-backdrop'>
      <div className='drop-menu-inner' onMouseLeave={() => handleExit(false)}>
        {content && (
          <div className='drop-menu-content' onClick={e => handleClick(e)}>
            {content}
          </div>
        )}
        {actions && (
          <div className='drop-menu-row'>
            {actions.map((action, i) => (
              <span
                className='drop-menu-action'
                key={i}
                onClick={() => handleClick(action.action)}
              >
                <Icon name={action.icon} className='drop-menu-icon' />
                {action.action}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export const DropMenu = ({
  handleClick,
  onMouseOver,
  handleExit,
  content,
  actions
}) => {
  const [ showMenu, toggleMenu ] = useState(false)
  return (
    <div>
      <span
        className='ellipsis'
        id='ellipsis-span'
        onClick={() => toggleMenu(true)}
        onMouseOver={() => toggleMenu(false)}
      >
        ...
      </span>
      {showMenu &&
        ReactDOM.createPortal(
          <DropMenuContainer
            handleExit={toggleMenu}
            handleClick={handleClick}
            content={content}
            actions={actions}
          />,
          document.getElementById('ellipsis-span')
        )}
    </div>
  )
}
