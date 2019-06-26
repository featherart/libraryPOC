import React from 'react'
import img from '../../assets/SOL_logo.svg'
import './header.less'

export const Header = () => (
  <div className='header'>
    <img src={img} alt='logo' />
    <span>Getting Started</span>
  </div>
)
