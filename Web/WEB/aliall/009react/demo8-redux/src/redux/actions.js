// 包含所有的action creator
//INCREMENT
import {INCREMENT,DECREMENT} from '../redux/action-types'



export const increment=(number)=>(
    {type:INCREMENT,data:number}
)
export const decrement=(number)=>(
    {type:DECREMENT,data:number}
)