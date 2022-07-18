import React from 'react';
import {Dialogs} from '../../components/dialogs/Dialogs';
import {Dialog} from '../../components/dialogs/Dialog/Dialog';
import style from './Messages.module.css';

export const Messages = () => {
    return (
        <div className={style.messagesWrapper}>
            <Dialogs/>
            <Dialog/>
        </div>

    );
};
