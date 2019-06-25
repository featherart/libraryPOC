import React from 'react'
import { Link, Router } from '@reach/router'
import { Header } from './documentation/Header'
import './app.css'

const App = () => (
  <div className='home-container'>
    <Header />
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="dashboard">Dashboard</Link>
    </nav>

    <Router>
      <Home path='/' />
      <Dashboard path='/dashboard' />
    </Router>
  </div>
)

const Home = () => (
  <div className='home'>
    <h2>Welcome</h2>
  </div>
)

const Dashboard = () => (
  <div className='dashboard'>
    <h2>Dashboard</h2>
  </div>
)

// const Header = () => (
//   <div className='header-container'>
//     <img src={img} />
//     <span>Getting Started</span>
//   </div>
// )

export default App
