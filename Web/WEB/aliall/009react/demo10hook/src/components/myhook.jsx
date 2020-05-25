import React, { useState } from 'react'

const useCus=(val,num)=>{
    let [count,setCount]=useState(val)
    const add = ()=>{
        setCount(count+num)
    }

    return {count,add}
}
export default()=>{
    let {count,add}=useCus(10,2)
    return(
        <div>
            <h1>custerm</h1>
            <h2>{count}</h2>
            <button onClick={()=>{
                add()
            }}></button>
        </div>
    )
}