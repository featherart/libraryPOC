import React from 'react'
import { Router } from '@reach/router'
import { Modal } from './documentation/pages/Modal'
import { Home } from './documentation/Home'
import { DefaultError } from './documentation/DefaultError'

const routes = [
  {
    path: '/',
    title: 'Home',
    Component: Home
  },
  {
    path: '/modal',
    title: 'Modal',
    Component: Modal
  },
  {
    path: '/error',
    title: 'Error',
    Component: DefaultError
  }
]

export const DocumentationRouter = () => {
  return (
    <Router>
      { 
        routes.map(({ Component, path }, key) => <Component path={path} key={key} />)
      }
      <DefaultError default />
    </Router>
  )
}
