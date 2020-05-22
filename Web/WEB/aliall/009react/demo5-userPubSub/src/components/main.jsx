import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component {
    state={
        initView:true,
        loading:false,
        users:null,
        errorMsg:null,
    }
    componentDidMount(){
        //订阅消息（search）
        PubSub.subscribe('search',(msg,searchName)=>{
            this.setState({
                initView:false,
                loading:true
            })
            const url=`https://api.github.com/search/repositories?q=${searchName}+language:assembly&sort=stars&order=desc`
            axios.get(url)
                .then(response=>{
                    //得到响应数据
                    let result=response.data;
                    
                    const users=result.items.map(item=>{
                        const { owner} = item
                        return {name:owner.login,url:owner.html_url,avatarUrl:owner.avatar_url}
                    })
                    console.log(result, users);
                    //更新状态（成功）
                    this.setState({loading:false,users})
                })
                .catch(error=>{
                    //更新状态（失败）
                    this.setState({loading:false,errorMsg:error.message})
                })
        })
    }
    // //当组件接收到新的属性时回调该钩子函数
    // componentWillReceiveProps(newProps){
    //     const {searchName}=newProps//指定了新的searchName，需要发送请求
    //     //更新状态
    
    // }
    render() {
        const {initView ,loading,users,errorMsg}=this.state
        const {searchName}=this.props
        if(initView){
            return <h2>请输入关键字搜索</h2>
        }else if(loading){
            return <h2>LOADING</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else{
            return (
                <div className="row">
                    {
                        users.map((user,index)=>(
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                <img src={user.avatarUrl} style={{width:100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}
