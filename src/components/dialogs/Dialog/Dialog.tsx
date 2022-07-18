import React from 'react';
import style from './Dialog.module.css';
import {Message} from '../../messages/message/Message';

export const Dialog = () => {
    return (
        <div className={style.dialogsList}>
            <ul className={style.messages} style={{listStyle: 'none'}}>
                <Message message={'Yo!'}/>
                <Message message={'Hello!'}/>
                <Message message={'Hello World!'}/>
            </ul>
        </div>
    );
};
