import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from '../../components/dialogs/Dialog/DialogItem/DialogItem';

export const Dialogs = () => {

    const arrayDialogs = [
        {id: 1, userName: 'Dimych'},
        {id: 2, userName: 'Igor'},
        {id: 3, userName: 'Valera'},
        {id: 4, userName: 'Viktor'},
        {id: 5, userName: 'Sveta'},
    ];

    const dialogItems = arrayDialogs.map(item => <DialogItem userName={item.userName}/>);

    return (
        <div className={style.dialogsWrapper}>
            <ul style={{listStyle: 'none'}}>
                {dialogItems}
                {/*<DialogItem userName={'Dimych'}/>*/}
                {/*<DialogItem userName={'Sveta'}/>*/}
                {/*<DialogItem userName={'Valera'}/>*/}
                {/*<DialogItem userName={'Viktor'}/>*/}
            </ul>
        </div>
    );
};
