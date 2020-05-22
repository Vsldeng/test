import React from 'react'


const allMessages=[
    {id:1,title:'message1',content:'我爱你，中国'},
    {id:2,title:'message2',content:'我爱你，Kmckk'},
    {id:3,title:'message3',content:'我爱你，孩子'},
    {id:4,title:'message4',content:'我爱你，Kmckkkk'},
]
export default function MessageDetail(props){
    const {id} =props.match.params
    const message=allMessages.find((m)=>m.id==id)
    return (
        <div>
            <ul>
                <li>id:{message.id}</li>
                <li>TITLE: {message.title}</li>
                <li>Content:{message.content}</li>
            </ul>
        </div>
    )
}