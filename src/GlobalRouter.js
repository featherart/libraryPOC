import React from 'react'
import { Router } from '@reach/router'
import { Home } from './documentation/Home'
import {
  AlertPage,
  ButtonPage,
  DropMenuPage,
  FloatingActionMenuPage,
  ModalPage,
  TooltipPage
} from './documentation/pages'
import { DefaultError } from './documentation/DefaultError'

export const GlobalRouter = () => (
  <Router>
    <Home path='/' component={Home} />
    <AlertPage path='/alert' />
    <ButtonPage path='/button' />
    <DropMenuPage path='/dropdown' />
    <FloatingActionMenuPage path='/floatingactionmenu' />
    <ModalPage path='/modal' />
    <TooltipPage path='/tooltip' />
    <DefaultError path='/error' default />
  </Router>
)
