import React,{useContext} from 'react'
import {MyContext} from './mycontext.jsx'

const ChildContext=()=>{
    const count= useContext(MyContext);
    return(
        <h3>{count}</h3>
    )
}
export default ChildContext