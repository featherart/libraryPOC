import React from 'react'
import { Location, Router, Link } from '@reach/router'
import { Header } from './documentation/Header'
import { SideNavbar } from './documentation/SideNavbar'
import { DefaultError } from './documentation/DefaultError'
import { Home } from './documentation/Home'
import {
  ButtonPage,
  DropMenuPage,
  ExamplePage,
  ModalPage
} from './documentation/pages'

import style from './styles/app.less'

const App = props => (
  <div className={style.appContainer}>
    <Header />
    <div className={style.contentContainer}>
      <SideNavbar />
      <div className={style.mainContent}>
        <Router>
          <Home path="/" component={Home} />
          <ButtonPage path="/button" />
          <DropMenuPage path="/dropdown" />
          <ExamplePage path="/example" />
          <ModalPage path="/modal" />
          <DefaultError path="/error" default />
        </Router>
      </div>
    </div>
  </div>
)

export default App
