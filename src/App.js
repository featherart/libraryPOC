//import { hot } from 'react-hot-loader'
import React from 'react'
import { GlobalRouter } from './GlobalRouter'
import { Header } from './documentation/Header'
import { SideNavbar } from './documentation/SideNavbar'

import './styles/app.less'

const App = props => (
  <div className={'appContainer'}>
    <Header />
    <div className={'contentContainer'}>
      <SideNavbar />
      <div className={'mainContent'}>
        <GlobalRouter />
      </div>
    </div>
  </div>
)

export default App
