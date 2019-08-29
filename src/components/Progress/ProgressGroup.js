// @flow
import React from 'react'
import cx from 'classnames'

// type Props = {
//   children?: ChildrenArray<*>,
//   inline?: boolean,
//   className?: string
// }

export const ProgressGroup = ({ children, inline, className }) => {
  const styleClasses = cx({ inline })
  const classes = cx('ui', 'progress-group', styleClasses, className)
  return <div className={classes}>{children}</div>
}
