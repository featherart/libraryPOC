import React from 'react'
import classNames from 'classnames/bind'
import './button.less'

export const Button = ({
  children,
  primary,
  flat,
  className
}) => {
  const styles = {
    primary: 'primary',
    flat: 'flat'
  }

  const cx = classNames.bind(styles)
  console.log('cx', cx)
  return (
    <button className='button'>
      {children}
    </button>
  )
}
