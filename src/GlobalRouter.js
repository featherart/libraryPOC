import React from 'react'
import { Router } from '@reach/router'
import {
  AlertPage,
  ButtonPage,
  DropMenuPage,
  FloatingActionMenuPage,
  IconPage,
  ModalPage,
  TooltipPage
} from './documentation/pages'
import { Home } from './documentation/Home'
import { DefaultError } from './documentation/DefaultError'

export const GlobalRouter = () => (
  <Router>
    <Home path='/' component={Home} />
    <AlertPage path='/alert' />
    <ButtonPage path='/button' />
    <DropMenuPage path='/dropdown' />
    <FloatingActionMenuPage path='/floatingactionmenu' />
    <IconPage path='/icon' />
    <ModalPage path='/modal' />
    <TooltipPage path='/tooltip' />
    <DefaultError path='/error' default />
  </Router>
)
