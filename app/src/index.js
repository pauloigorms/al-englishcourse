import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes.js'
// import * as serviceWorker from './serviceWorker'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/costumer.scss'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)

// serviceWorker.unregister()