import React from 'react'
import style from './button.less'

export const Button = ({
  children,
  // default,
  // primary,
  // flat,
  // neutral,
  // danger,
  // disabled
}) => (
  <button className={`${style.button} ${style.confirmButton}`}>
    {children}
  </button>
)
