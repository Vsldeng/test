import React, { Component } from 'react'
import Main from './main.jsx'
import Search from './search.jsx'

export default class App extends Component {
    state={
        searchName:''
    }
    setSearchName=(searchName)=>{
        this.searchName=searchName;
        this.setState({searchName});
    }
    render() {
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <Main searchName={this.state.searchName}/>
            </div>
        )
    }
}
