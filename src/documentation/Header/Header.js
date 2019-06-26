import React from 'react'
import img from '../../assets/SOL_logo.svg'
import style from './header.less'

export const Header = () => (
  <div className={style.headerContainer}>
    <div className={style.header}>
      <img src={img} alt='logo' />
      <span>Getting Started</span>
      <span>Guidelines</span>
      <span>Components</span>
      <span>Contributing</span>
      <span>Help</span>
    </div>
  </div>
)
