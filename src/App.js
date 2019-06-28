import React from 'react'
import { Location, Router, Link } from '@reach/router'
import { Header } from './documentation/Header'
import { SideNavbar } from './documentation/SideNavbar'
import { DefaultError } from './documentation/DefaultError'
import { Home } from './documentation/Home'
import { ExamplePage } from './documentation/pages/ExamplePage'
import { ModalPage } from './documentation/pages/ModalPage'
import style from './styles/app.less'

const App = props => (
  <div className={style.appContainer}>
    <Header />
    <div className={style.contentContainer}>
      <SideNavbar />
      <div className={style.mainContent}>
        <Router>
          <Home path="/" component={Home} />
          <ModalPage path="/modal" />
          <ExamplePage path='/example' />
          <DefaultError path='/error' default />
        </Router>
      </div>
    </div>
  </div>
)

export default App
