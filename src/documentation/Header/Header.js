import React from 'react'
import icon from '../../assets/SOL_logo.svg'
import './header.less'

export const Header = () => (
  <header className={'documentation header'}>
    <img src={icon} alt='logo' />
    <span>Getting Started</span>
    <span>Guidelines</span>
    <span>Components</span>
    <span>Contributing</span>
    <span>Help</span>
  </header>
)
