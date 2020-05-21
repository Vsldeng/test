import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {
    state={
        username:'',
        content:''
    }
    static propTypes = {
        addComment:PropTypes.func.isRequired
    }
    handleSubmit=(props)=>{
        const comment=this.state;
        this.props.addComment(comment);
        this.setState({
            username:'',
            content:''
        })
    }
    handleUsername=(e)=>{   
        const username=e.target.value;
        this.setState({username:username});
    }
    handleContent=(e)=>{
        const content=e.target.value;
        this.setState({content:content});
    }
    render() {
        let username=this.state.username;
        let content=this.state.content;
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label>用户名</label>
                    <input type="text" className="form-control" placeholder="用户名" value={username} onChange={this.handleUsername}/>
                  </div>
                  <div className="form-group">
                    <label>评论内容</label>
                    <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleContent}></textarea>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                    </div>
                  </div>
                </form>
            </div>
        )
    }
}
