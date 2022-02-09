import React from 'react'
import s from './Message.module.css'


export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={s.message}>
            <div className={s.ava}>
                <img src={props.avatar} alt="ded"/>
            </div>
            <div className={s.messageArea}>
                <div className={s.messageName}>{props.name}</div>
                <div className={s.messageBody}>{props.message}</div>
                <div className={s.messageTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
