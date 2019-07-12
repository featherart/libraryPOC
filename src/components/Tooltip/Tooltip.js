import React, { useState } from 'react'
import cx from 'classnames'
import './tooltip.less'

const TooltipContainer = ({
  toggleShow,
  classes,
  header,
  message,
  dark
}) => {
  const styleClasses = cx(
    { dark }
  )

  console.log('styleClasses', styleClasses)
  const innerClasses = cx('tooltip-body', styleClasses)
  return (
    <div className='tooltip-backdrop'>
      <div className={classes} onMouseLeave={() => toggleShow(true)}>
        <span className='tooltip-header'>{header}</span>
        <p className={innerClasses}>{message}</p>
      </div>
    </div>
  )
}

export const Tooltip = ({
  children,
  header,
  message,
  position='top',
  className,
  danger,
  warning,
  information,
  success,
  dark
}) => {
  const [showTooltip, toggleShow] = useState(false)
  const styleClasses = cx(
    { danger },
    { warning },
    { information },
    { success },
    { dark },
    `${position}`
  )
  const classes = cx('tooltip-content', className, styleClasses)
  return (
    <div>
      <span
        onClick={() => toggleShow(!showTooltip)}>
        {children}
      </span>
      {
        showTooltip &&
        <TooltipContainer
          toggleShow={toggleShow}
          classes={classes}
          header={header}
          message={message}
          dark={dark}
        />
      }
    </div>
  )
}
