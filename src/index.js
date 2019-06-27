import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/color.less'
import './styles/fonts.less'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()
