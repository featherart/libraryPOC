import React from 'react'
import { Router } from '@reach/router'
import { DefaultError } from './src/documentation/DefaultError'
import { Home } from './src/documentation/Home'
import {
  ButtonPage,
  DropMenuPage,
  ExamplePage,
  ModalPage
} from './src/documentation/pages'

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
