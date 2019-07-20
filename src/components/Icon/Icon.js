import React from 'react'
import cx from 'classnames'
import './icon.less'
//import icon from '../../assets/SOL_Bug.svg'

export const Icon = ({
  name,
  smaller,
  small,
  medium,
  large,
  strong,
  onClick,
  className
}) => {
  const styleClasses = cx({ clickable: onClick })
  const sizeClasses = cx(
    { smaller },
    { small },
    { medium },
    { large },
    { strong }
  )
  const classes = cx('ui', 'icon', name, styleClasses, sizeClasses, className)

  return (
    <i onClick={onClick} aria-hidden='true' className={classes} />
  )
}
