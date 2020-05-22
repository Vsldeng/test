import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'//react-redux改造react

import store from './redux/store.js'
import App from './containers/app.jsx'



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
