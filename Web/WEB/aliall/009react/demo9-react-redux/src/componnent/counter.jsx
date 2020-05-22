import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {

    static propTypes={
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
        
    }


    increment=()=>{
        // let {count} =this.state
        // count+=this.select.value*1
        // this.setState({count})
        const number=this.select.value*1
        // 调用store的方法更新状态
        this.props.increment(number)
    }
    decrement=()=>{
        const number=this.select.value*1
        // 调用store的方法更新状态
        this.props.decrement(number)
    }
    incrementIfOdd=()=>{
        const number=this.select.value*1
        let count=this.props.count
        if(count%2===1)
        this.props.increment(number)
    }
    incrementAsync=()=>{
        const number=this.select.value*1
        this.props.incrementAsync(number)
    }
    render() {
        const {count}=this.props
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select=>this.select=select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}

