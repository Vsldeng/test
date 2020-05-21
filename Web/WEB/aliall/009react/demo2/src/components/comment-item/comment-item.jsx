import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './comment-item.css';

export default class CommentItem extends Component {
    static propTypes={
        comment:PropTypes.object.isRequired,
        deletComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }

    handleDelet=(event)=>{
        const {comment,deletComment,index}=this.props
        if(window.confirm(`确定删除${comment.username}的评论吗?`)){
            deletComment(index);
        }
    }
    render() {
        const {comment}=this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                <a href="javascript:;" onClick={this.handleDelet}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
