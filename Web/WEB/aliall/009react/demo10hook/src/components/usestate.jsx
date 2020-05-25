import React, {useState} from 'react';
import UseEffect from './useeffect.jsx'
import UseRef from './useref.jsx'
import UseContext from './usecontext.jsx'
import MyHook from './myhook.jsx'

const App =()=>{
    const [count,setCount]=useState(0)
    const [obj,setObj]=useState({name:'张三'})
    const [arr,setArr]=useState([0])
    const [func,setFunc]=useState(()=>{
        return count;
    })
    
    const handleAdd=()=>{
        setCount(count+1)
    }
    const handleChange=()=>{
        // setObj({name:'李四'})
        setObj({
            ...obj,
            age:18
        })
    }
    const handleArr=()=>{
        setArr(()=>{
            setCount(count+1);
            arr.push(" "+(count+1));
            return [...arr]
        })
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleAdd}>add</button>
            
            <p>{obj.name}</p>
            <button 
                onClick={handleChange}>
                Change
            </button>

            <p>{arr}</p>
            <button onClick={handleArr}>ChangeArr</button>
            
            {/* 函数类型的useState使用时候，得到的是返回值 */}
            <p>{func}</p>
            <button onClick={handleArr}>changeFunc</button>
            <UseEffect />
            <UseRef />
            <p>-----------------------------------------------------------------------------------------</p>
            <p>-----------------------------------------------------------------------------------------</p>
            <UseContext />
            <p>===========================================================================================</p>
            <MyHook />

        </div>
    )
}
export default App;