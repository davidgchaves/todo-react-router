import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Router } from './components/router'

const app =
  <Router>
    <App />
  </Router>

ReactDOM.render(
  app,
  document.getElementById('root')
)
