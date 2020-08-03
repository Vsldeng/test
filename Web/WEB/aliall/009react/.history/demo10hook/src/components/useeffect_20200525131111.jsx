import React,{useEffect,useState,useRef} from 'react'

const UseEffect =()=>{
    const [count,setCount]=useState(0)
    // useEffect第一个参数是一个回调函数,只要状态改变，uesEffect的第一个参数相当于钩子函数componentDidUpdate和componentDidMount
    useEffect(()=>{
        console.log(count)
        return ()=>{
            console.log('componentWillUnmount')//在useEffect里使用return是使用伪componentWillUnmount的钩子函数
        }
    },[count])//第二个参数是控制监控哪个状态，整个状态（这些状态）改变，就会调用该伪钩子函数
    return(
        <div>
            <h2>effect</h2>
            <button onClick={()=>{setCount(count+1)}}></button>
        </div>
    )
}
export default UseEffect

