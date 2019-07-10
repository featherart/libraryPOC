import React from 'react'
import { Location, Router, Link } from '@reach/router'

import './sideNavbar.less'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? '#76B900' : '#9E9E9E'
        }
      }
    }}
  />
)

export const SideNavbar = () => (
  <div className={'sideNavbarContainer'}>
    <aside>
      <div className={'sideNavbarItem'}>
        <NavLink to='/'>Overview</NavLink>
      </div>
      <div className={'sideNavbarItem'}>
        <NavLink to='/alert'>Alerts</NavLink>
      </div>
      <div className={'sideNavbarItem'}>
        <NavLink to='/button'>Buttons</NavLink>
      </div>
      <div className={'sideNavbarItem'}>
        <NavLink to='/dropdown'>Dropdown</NavLink>
      </div>
      <div className={'sideNavbarItem'}>
        <NavLink to='/floatingactionmenu'>Floating Action Menu</NavLink>
      </div>
      <div className={'sideNavbarItem'}>
        <NavLink to='/modal'>Modals</NavLink>
      </div>
      <div className={'sideNavbarItem'}>
        <NavLink to='/tooltip'>Tooltips</NavLink>
      </div>
    </aside>
  </div>
)
