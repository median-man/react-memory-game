import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Images from './images'
import imagesData from './imageData.json'

const images = new Images(imagesData);

ReactDOM.render(
  <App images={images} />,
  document.getElementById('root')
)
registerServiceWorker()
