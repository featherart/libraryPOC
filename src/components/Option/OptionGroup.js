// @flow
import React from 'react'
import cx from 'classnames'

export const OptionGroup = ({
  children,
  name,
  onChange,
  inline,
  className
}) => {
  const styleClasses = cx({ inline })
  const classes = cx('ui', 'option-group', className, styleClasses)
  return (
    <div className={classes}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { name, onChange })
      )}
    </div>
  )
}
