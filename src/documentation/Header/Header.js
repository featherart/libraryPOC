import React from 'react'
import img from '../../assets/logo.svg'
import '../../app.css'

export const Header = () => (
  <div className='header-container'>
    <img src={img} alt='logo' />
    <span>Getting Started</span>
  </div>
)
