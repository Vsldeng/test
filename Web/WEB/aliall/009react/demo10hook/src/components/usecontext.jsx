import React,{useRef,useState} from 'react'
import ChildContext from './childcomponents/childcontext.jsx'
import {MyContext} from './childcomponents/mycontext.jsx'


const UseContext=()=>{
    let [count,setCount]=useState(0);

    return (
        <div>
            <MyContext.Provider value={count}>
                <ChildContext />
            </MyContext.Provider>
            <button onClick={()=>{setCount(count+1)}}>add</button>
        </div>
    )
}
export default UseContext