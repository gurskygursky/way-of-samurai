import React from 'react';
import style from './Message.module.css';

type MessagePropsType = {
    message: string;
}
export const Message = (props: MessagePropsType) => {
    return (
        <li className={style.message}>{props.message}</li>
    );
};
