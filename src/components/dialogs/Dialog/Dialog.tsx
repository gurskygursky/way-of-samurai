import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Dialog.module.css';
import {Message} from '../../messages/message/Message';
import { MessageType } from '../../../redux/state';

type DialogPropsType = {
    arrayMessages: MessageType[];
    newMessageText: string;
    sendMessage: () => void;
    updateNewMessage: (newMessageText: string) => void;
}

export const Dialog = (props: DialogPropsType) => {

    const messageItems = props.arrayMessages.map(item => <Message message={item.message}/>);

    const sendMessage = () => {
        props.sendMessage();
        console.log(props.arrayMessages);
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(event.currentTarget.value);
    }

    return (
        <div className={style.dialogsList}>
            <ul className={style.messages} style={{listStyle: 'none'}}>
                {messageItems}
            </ul>
            <div>
                <textarea value={props.newMessageText}
                          onChange={onChangeHandler}
                          onKeyDown={onKeyPressHandler}
                          maxLength={300}
                />
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    );
};
