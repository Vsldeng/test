import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item/comment-item.jsx';
import './commentList.css'

export default class CommentList extends Component {
    //加上static是给组件类添加属性
    static propTypes={
        comments:PropTypes.array.isRequired,
        deletComment:PropTypes.func.isRequired,
    }
    render() {
        const {comments , deletComment}=this.props;
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment1,index)=><CommentItem comment={comment1} index={index} key={index} deletComment={deletComment} />)
                    }
                </ul>
            </div>
        )
    }
}

// CommentList.propTypes={
//     comments:PropTypes.array.isRequired
// }