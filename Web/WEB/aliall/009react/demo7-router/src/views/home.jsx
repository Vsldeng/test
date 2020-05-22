import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../component/my-nav-link.jsx'
import Message from './message.jsx'
import News from './news.jsx'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home 组件内容</h2>
                <ul className='nav nav-tabs'>
                    <li><MyNavLink to='/home/news'>news</MyNavLink></li>
                    <li><MyNavLink to='/home/message'>Message</MyNavLink></li>
                </ul>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        )
    }
}
