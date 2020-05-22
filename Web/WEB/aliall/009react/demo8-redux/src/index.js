import React from 'react'
import ReactDOM from 'react-dom';
import store from './redux/store.js'
import App from './componnent/app.jsx'



function render(){
    ReactDOM.render(<App />,document.getElementById('root'))
}
render()

store.subscribe(render)