import React from 'react';
import style from './Dialog.module.css';
import {Message} from '../../messages/message/Message';
import {MessageType} from '../../../index';

type DialogPropsType = {
    arrayMessages: MessageType[];
}

export const Dialog = (props: DialogPropsType) => {

    const messageItems = props.arrayMessages.map(item => <Message message={item.message}/>);

    return (
        <div className={style.dialogsList}>
            <ul className={style.messages} style={{listStyle: 'none'}}>
                {messageItems}
            </ul>
        </div>
    );
};
