import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from '../../components/dialogs/Dialog/DialogItem/DialogItem';

export const Dialogs = () => {
    return (
        <div className={style.dialogsWrapper}>
            <ul style={{listStyle: 'none'}}>
                <DialogItem userName={'Dimych'}/>
                <DialogItem userName={'Sveta'}/>
                <DialogItem userName={'Valera'}/>
                <DialogItem userName={'Viktor'}/>
            </ul>
        </div>
    );
};
