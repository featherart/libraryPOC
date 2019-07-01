import React from 'react'
import { Router } from '@reach/router'
import { DefaultError } from './documentation/DefaultError'
import { Home } from './documentation/Home'
import {
  ButtonPage,
  DropMenuPage,
  ExamplePage,
  ModalPage
} from './documentation/pages'

export const GlobalRouter = () => (
  <Router>
    <Home path='/' component={Home} />
    <ButtonPage path='/button' />
    <DropMenuPage path='/dropdown' />
    <ExamplePage path='/example' />
    <ModalPage path='/modal' />
    <DefaultError path='/error' default />
  </Router>
)
