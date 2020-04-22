import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/App.js'
import * as serviceWorker from './serviceWorker'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/costumer.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()