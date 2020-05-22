import React from 'react'
import {increment,decrement} from '../redux/actions'
import {connect} from 'react-redux'
import Counter from '../componnent/counter.jsx'

export default connect(
    state=>({count:state}),
    {increment,decrement,incrementAsync}
)(Counter)
//返回一个组件