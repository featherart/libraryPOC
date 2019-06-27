import React from 'react'
import { Location, Router, Link } from '@reach/router'
import { Home } from '../Home'
import { Modal } from '../pages/Modal'

import style from './sideNavbar.less'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? '#76B900' : '#616161'
        }
      }
    }}
  />
)

export const SideNavbar = () => (
  <div className={style.sideNavbarContainer}>
    <aside>
      <div className={style.sideNavbarItem}>
        <NavLink to="/">Overview</NavLink>
      </div>
      <div className={style.sideNavbarItem}>
        <NavLink to="/alerts">Alerts</NavLink>
      </div>
      <div className={style.sideNavbarItem}>
        <NavLink to="/buttons">Buttons</NavLink>
      </div>
      <div className={style.sideNavbarItem}>
        <NavLink to="/dropdown">Dropdown</NavLink>
      </div>
      <div className={style.sideNavbarItem}>
        <NavLink to="/floatingactionmenu">Floating Action Menu</NavLink>
      </div>
      <div className={style.sideNavbarItem}>
        <NavLink to="/modal">Modals</NavLink>
      </div>
    </aside>
  </div>
)
