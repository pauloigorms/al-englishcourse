import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes.js'
// import * as serviceWorker from './serviceWorker'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/costumer.scss'
import './assets/css/mobile-costumer.scss'

// const baseUrl = document.getElementsByTagName('base')[0]
const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  rootElement
)

// serviceWorker.unregister()