import React from 'react'
import icon from '../../assets/logo.svg'
import style from './header.less'

export const Header = () => (
  <header className={style.header}>
    <img src={icon} alt="logo" />
    <span>Getting Started</span>
    <span>Guidelines</span>
    <span>Components</span>
    <span>Contributing</span>
    <span>Help</span>
  </header>
)
