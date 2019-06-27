import React from 'react'
import { Location, Router, Link } from '@reach/router'
import { Header } from './documentation/Header'
import { SideNavbar } from './documentation/SideNavbar'
import { Home } from './documentation/Home'
import { Modal } from './documentation/pages/Modal'
import style from './styles/app.less'

const App = props => (
  <div className={style.appContainer}>
    <Header />
    <div className={style.contentContainer}>
      <SideNavbar />
      <div className={style.mainContent}>
        <Router>
          <Home path="/" component={Home} />
          <Modal path="/modal" />
        </Router>
      </div>
    </div>
  </div>
)

export default App
