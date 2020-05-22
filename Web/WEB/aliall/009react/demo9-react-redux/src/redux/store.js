import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './reducers'
//生成一个store对象
const store=createStore(
    counter,
    applyMiddleware(thunk)//应用上异步中间件
    )//内部会第一次调用reducer函数，得到初始state

export default store