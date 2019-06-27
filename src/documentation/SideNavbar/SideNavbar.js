import React from 'react'
import { Link, Router } from '@reach/router'
import { Home } from '../Home'
import { Modal } from '../pages/Modal'

export const SideNavbar = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="modal">Modal</Link>
    </nav>

    <Router>
      <Home path='/' />
      <Modal path='/modal' />
    </Router>
  </div>
)
