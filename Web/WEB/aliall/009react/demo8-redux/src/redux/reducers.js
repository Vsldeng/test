// 包含n个reducer函数的模块
//每个reducer接收的参数是一样的state action
import {INCREMENT,DECREMENT} from './action-types.js'


export function counter(state=0,action){
    console.log('counter()',state,action)
    switch(action.type){
        case 'INCREMENT':
            return state+action.data
        case 'DECREMENT':
            return state-action.data
        default:
            return state
    }
}
