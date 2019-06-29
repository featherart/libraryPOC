import React, { useState } from 'react'
import cx from 'classnames'
import style from './dropMenu.less'

const Icon = () => <div>icon</div>

const DropMenuContainer = ({ ...props }) => {
  const [showMenu, toggleShowMenu] = useState(false)

  const handleClick = () => {
    console.log('in here', showMenu)
    showMenu ? toggleShowMenu(false) : toggleShowMenu(true)
  }

  const handleMouseLeave = () => {
    toggleShowMenu(false)
  }

  const {
    actions,
    light,
    lightEllipsis,
    right,
    leftTop,
    rightTop,
    openOnHover
  } = props

  const globalStyleClasses = cx(
    'dropMenuInner',
    { light },
    { right },
    { leftTop },
    { rightTop },
    `rows${actions && actions.length}`
  )
  const ellipsisStyleClasses = cx('ellipsis', { lightEllipsis })

  return (
    <div className={style.dropMenuBackdrop} onMouseLeave={handleMouseLeave}>
      <span
        className={style.ellipsisStyleClasses}
        onClick={handleClick}
        onMouseOver={openOnHover && handleClick}
      >
        ...
      </span>
      {showMenu && (
        <div className={style.dropMenu} onMouseLeave={handleMouseLeave}>
          <div className={style.globalStyleClasses}>
            <div className={style.dropMenuContent}>
              {actions &&
                actions.map((action, i) => {
                  const danger = action && action.danger
                  const disabled = action && action.disabled
                  const confirm = action && action.confirm
                  const innerStyleClasses = cx(
                    'dropMenuRow',
                    { danger },
                    { disabled },
                    { confirm }
                  )
                  return (
                    <span
                      key={i}
                      className={innerStyleClasses}
                      onClick={action.onClick}
                    >
                      <span className="dropMenuAction">{action.action}</span>
                    </span>
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const DropMenu = ({
  actions,
  className,
  light,
  lightEllipsis,
  right,
  leftTop,
  rightTop,
  onOpen,
  onClose,
  openOnHover
}) => (
  <div className="ui dropmenu">
    <DropMenuContainer
      actions={actions}
      className={className}
      leftTop={leftTop}
      light={light}
      lightEllipsis={lightEllipsis}
      right={right}
      rightTop={rightTop}
      onOpen={onOpen}
      onClose={onClose}
      openOnHover={openOnHover}
    />
  </div>
)
