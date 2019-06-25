import React from 'react'
import { Link, Router } from '@reach/router'
import './app.css'

const App = () => (
  <div className='home-container'>
    <h1>Header</h1>
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

export default App
