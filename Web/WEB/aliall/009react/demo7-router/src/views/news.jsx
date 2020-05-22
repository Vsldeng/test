import React, { Component } from 'react'

export default class News extends Component {
    state={
        newsArr:[
            'news1',
            'news2',
            'news3'
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.newsArr.map((news,index)=><li key={index}>{news}</li>)}
                </ul>
            </div>
        )
    }
}
