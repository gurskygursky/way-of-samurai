import React from 'react';
import style from './Dialog.module.css';
import {Message} from '../../messages/message/Message';

export const Dialog = () => {

    const arrayMessages = [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Hello World!'},
    ];

    const messageItems = arrayMessages.map(item => <Message message={item.message}/>);

    return (
        <div className={style.dialogsList}>
            <ul className={style.messages} style={{listStyle: 'none'}}>
                {messageItems}
                {/*<Message message={'Yo!'}/>*/}
                {/*<Message message={'Hello!'}/>*/}
                {/*<Message message={'Hello World!'}/>*/}
            </ul>
        </div>
    );
};
