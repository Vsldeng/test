import React from 'react'
import {render} from 'react-dom'
// import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './component/app.jsx'

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('root')
)


