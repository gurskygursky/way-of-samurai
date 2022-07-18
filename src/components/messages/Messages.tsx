import React from 'react';
import {Dialogs} from '../../components/dialogs/Dialogs';
import {Dialog} from '../../components/dialogs/Dialog/Dialog';
import style from './Messages.module.css';
import {DialogType, MessageType} from '../../index';

type MessagesPropsType = {
    arrayDialogs: DialogType[];
    arrayMessages: MessageType[];
}

export const Messages = (props: MessagesPropsType) => {
    return (
        <div className={style.messagesWrapper}>
            <Dialogs arrayDialogs={props.arrayDialogs}/>
            <Dialog arrayMessages={props.arrayMessages}/>
        </div>

    );
};
