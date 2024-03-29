import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Dialog.module.css';
import {Message} from '../../messages/message/Message';
import {MessageType, sendMessageAC, updateNewMessageAC} from '../../../redux/reducers/dialogsReducer';
import {ActionsType} from '../../../redux/redux-store';
import {DialogContainerType} from './../../../components/dialogs/Dialog/DialogContainer';

// type DialogPropsType = {
//     arrayMessages: MessageType[];
//     newMessageText: string;
//     dispatch: (action: ActionsType) => void;
//     sendMessage: () => void;
//     onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
// }

export const Dialog = (props: DialogContainerType) => {

    const messageItems = props.arrayMessages.map(item => <Message message={item.message}/>);

    const sendMessage = () => {
        props.sendMessage();
        // props.dispatch(sendMessageAC());
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(event);
        // props.dispatch(updateNewMessageAC(event.currentTarget.value));
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
