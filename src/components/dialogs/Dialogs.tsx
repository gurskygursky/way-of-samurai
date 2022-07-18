import React from 'react';
import style from './Dialogs.module.css';
import {Dialog} from '../../components/dialogs/Dialog/Dialog';

export const Dialogs = () => {
    return (
        <div className={style.dialogsWrapper}>
            <Dialog/>
            <ul className={style.messages} style={{listStyle: 'none'}}>
                <li className={style.message}>Hi!</li>
                <li className={style.message}>Hello World!</li>
                <li className={style.message}>Yo!</li>
            </ul>
        </div>
    );
};
