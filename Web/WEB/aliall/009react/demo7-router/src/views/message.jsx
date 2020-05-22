import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import MessageDetail from './message-detail.jsx'
import MyNavLink from '../component/my-nav-link.jsx'

export default class Message extends Component {
    state={
        messages:[

        ]
    }
    componentDidMount(){
        //模拟发送ajax请求，异步获取数据
        setInterval(()=>{
            const messages=[
                {id:1,title:'message1'},
                {id:2,title:'message2'},
                {id:3,title:'message3'},
            ]
            //更新状态
            this.setState({messages})
        },1000)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map((message,index)=>(
                        <li>
                            <MyNavLink key={index} to={`/home/message/messagedetail/${message.id}`}>{message.title}</MyNavLink>
                        </li>
                    ))}
                </ul>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail} />
            </div>
        )
    }
}
