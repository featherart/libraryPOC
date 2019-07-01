import React from 'react'
import { GlobalRouter } from '../GlobalRouter'
import { Header } from './documentation/Header'
import { SideNavbar } from './documentation/SideNavbar'

import style from './styles/app.less'

const App = props => (
  <div className={style.appContainer}>
    <Header />
    <div className={style.contentContainer}>
      <SideNavbar />
      <div className={style.mainContent}>
        <GlobalRouter />
      </div>
    </div>
  </div>
)

export default App
