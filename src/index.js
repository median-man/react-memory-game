import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { newGame } from './lib/use-cases'

ReactDOM.render(
  <App newGame={newGame} />,
  document.getElementById('root')
)
registerServiceWorker()
