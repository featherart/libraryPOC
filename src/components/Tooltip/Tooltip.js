import React from 'react'
import './tooltip.less'

export const Tooltip = ({ children, header, message }) => {
  return (
    <div className='ui tooltip'>
      <span>{header}</span>
      <p>{message}</p>
    </div>
  )
}
