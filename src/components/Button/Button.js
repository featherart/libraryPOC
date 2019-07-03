import React from 'react'
import cx from 'classnames/bind'
import './button.less'

export const Button = ({
  children,
  primary,
  defaultStyle,
  neutral,
  flat,
  disabled,
  accessible,
  danger,
  className,
  onClick
}) => {
  const styleClasses = cx(
    { primary },
    { defaultStyle },
    { neutral },
    { flat },
    { accessible },
    { danger },
    { disabled }
  )
  const classes = cx('ui', 'button', className, styleClasses)
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
