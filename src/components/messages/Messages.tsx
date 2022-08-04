import React from 'react';
import {Dialogs} from '../../components/dialogs/Dialogs';
import {Dialog} from '../../components/dialogs/Dialog/Dialog';
import style from './Messages.module.css';
import {DialogType, MessageType} from '../../redux/reducers/dialogsReducer';
import {ActionsType} from '../../redux/redux-store';
import {DialogContainer} from './../../components/dialogs/Dialog/DialogContainer';

type MessagesPropsType = {
    arrayDialogs: DialogType[];
    arrayMessages: MessageType[];
    newMessageText: string;
    dispatch: (action: ActionsType) => void;
}

export const Messages = (props: MessagesPropsType) => {
    return (
        <div className={style.messagesWrapper}>
            <Dialogs arrayDialogs={props.arrayDialogs}/>
            {/*<Dialog arrayMessages={props.arrayMessages}*/}
            {/*        newMessageText={props.newMessageText}*/}
            {/*        dispatch={props.dispatch}*/}
            {/*/>*/}
            <DialogContainer newMessageText={props.newMessageText}
                             dispatch={props.dispatch}
            />
        </div>
    );
};
