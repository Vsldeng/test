import React,{useRef} from 'react'


const UseRef=()=>{
    const s2=useRef();

    return(
        <div>
            <button type='button' onClick={ev=>{
                s2.current.style.background='red';
            }}>+1</button>
            <span ref={s2}>bbb</span>
        </div>
    )
}
export default UseRef