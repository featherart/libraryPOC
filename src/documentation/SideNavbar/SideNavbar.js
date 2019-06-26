import React from 'react'
import { Link } from '@reach/router'
import { DocumentationRouter } from '../../router'
import style from './sideNavbar.less'

export const SideNavbar = () => (
  <div className={style.sideNavbarContainer}>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/modal">Modal</Link>
    </nav>
  </div>
)
