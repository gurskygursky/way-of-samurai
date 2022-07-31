import React from 'react';
import {Dialogs} from '../../components/dialogs/Dialogs';
import {Dialog} from '../../components/dialogs/Dialog/Dialog';
import style from './Messages.module.css';
// import {DialogType, MessageType} from '../../index';
import {DialogType, MessageType} from '../../redux/state';

type MessagesPropsType = {
    arrayDialogs: DialogType[];
    arrayMessages: MessageType[];
    newMessageText: string;
    sendMessage: () => void;
    updateNewMessage: (newMessageText: string) => void;
}

export const Messages = (props: MessagesPropsType) => {
    return (
        <div className={style.messagesWrapper}>
            <Dialogs arrayDialogs={props.arrayDialogs}/>
            <Dialog arrayMessages={props.arrayMessages}
                    newMessageText={props.newMessageText}
                    sendMessage={props.sendMessage}
                    updateNewMessage={props.updateNewMessage}
            />
        </div>

    );
};
