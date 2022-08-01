import React from 'react';
import {Dialogs} from '../../components/dialogs/Dialogs';
import {Dialog} from '../../components/dialogs/Dialog/Dialog';
import style from './Messages.module.css';
import {ActionsTypes, DialogType, MessageType} from '../../redux/state';

type MessagesPropsType = {
    arrayDialogs: DialogType[];
    arrayMessages: MessageType[];
    newMessageText: string;
    dispatch: (action: ActionsTypes) => void;
}

export const Messages = (props: MessagesPropsType) => {
    return (
        <div className={style.messagesWrapper}>
            <Dialogs arrayDialogs={props.arrayDialogs}/>
            <Dialog arrayMessages={props.arrayMessages}
                    newMessageText={props.newMessageText}
                    dispatch={props.dispatch}
            />
        </div>

    );
};
