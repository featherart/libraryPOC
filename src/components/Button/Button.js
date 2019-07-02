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
  className
}) => {
  const styleClasses = cx(
    { primary },
    { defaultStyle },
    { neutral },
    { flat },
    { accessible },
    { disabled }
  )
  const classes = cx('ui', 'button', className, styleClasses)
  console.log('classes', classes)
  return (
    <button className={classes}>
      {children}
    </button>
  )
}
