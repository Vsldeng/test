import React, { Component } from 'react'
import Main from './main.jsx'
import Search from './search.jsx'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <Main />
            </div>
        )
    }
}
