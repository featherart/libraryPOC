import React from 'react'
import { Router } from '@reach/router'
import { DefaultError } from './documentation/DefaultError'
import { Home } from './documentation/Home'
import {
  AlertPage,
  ButtonPage,
  DropMenuPage,
  ModalPage,
  TooltipPage
} from './documentation/pages'

export const GlobalRouter = () => (
  <Router>
    <Home path='/' component={Home} />
    <AlertPage path='/alert' />
    <ButtonPage path='/button' />
    <DropMenuPage path='/dropdown' />
    <ModalPage path='/modal' />
    <TooltipPage path='/tooltip' />
    <DefaultError path='/error' default />
  </Router>
)
