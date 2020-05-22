import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import CommentAdd from '../comment-add/comment-add.jsx';
import CommentList from '../comment-list/comment-list.jsx';

export default class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         comments:[
    //             {username:'Tom',content:'React挺好的'},
    //             {username:'Jack',content:'React太难了'}
    //         ]
    //     }
    // }
    state={
        comments:[
            {username:'Tom',content:'React不如vue'},
            {username:'Jack',content:'React比vue好'},
            {username:'Kmckk',content:'React和vue各有特色，相辅相成'}
        ]
    }
    componentDidMount(){
      //订阅消息（deleteComment）
      PubSub.subscribe('deleteComment',(msg,index)=>{
        this.deletComment(index);
      })
    }
    addComment=(comment)=>{
        const {comments}=this.state;
        comments.unshift(comment);
        this.setState({comments});
    }
    deletComment=(index)=>{
        let {comments}=this.state;
        comments.splice(index,1)
        this.setState({comments})
    }
    render() {
        const {comments}=this.state;
        return (
            <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
                <CommentAdd addComment={this.addComment}/>
                <CommentList comments={comments} />
            </div>
          </div>
        )
    }
}
