import React from 'react'
import { Router } from '@reach/router'
import {
  AlertPage,
  AvatarPage,
  ButtonPage,
  DropMenuPage,
  FloatingActionMenuPage,
  IconPage,
  ModalPage,
  OptionPage,
  PaginationPage,
  ProgressPage,
  TooltipPage
} from './documentation/pages'
import { Home } from './documentation/Home'
import { DefaultError } from './documentation/DefaultError'
import { Pagination } from './components';

export const GlobalRouter = () => (
  <Router>
    <Home path='/' component={Home} />
    <AlertPage path='/alert' />
    <AvatarPage path='/avatar' />
    <ButtonPage path='/button' />
    <DropMenuPage path='/dropdown' />
    <FloatingActionMenuPage path='/floatingactionmenu' />
    <IconPage path='/icon' />
    <ModalPage path='/modal' />
    <OptionPage path='/option' />
    <PaginationPage path='/pagination' />
    <ProgressPage path='/progress' />
    <TooltipPage path='/tooltip' />
    <DefaultError path='/error' default />
  </Router>
)
