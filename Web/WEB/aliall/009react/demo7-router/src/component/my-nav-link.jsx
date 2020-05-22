import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNacLink extends Component {
    render() {
        return (
            //将外部传入的所有属性，传入NavLink
            <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        )
    }
}
