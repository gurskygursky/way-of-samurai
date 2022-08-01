import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from '../../components/dialogs/Dialog/DialogItem/DialogItem';
import {DialogType} from '../../redux/reducers/dialogsReducer';

type DialogsPropsType = {
    arrayDialogs: DialogType[];
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogItems = props.arrayDialogs.map((item) => <DialogItem userName={item.userName}/>);

    return (
        <div className={style.dialogsWrapper}>
            <ul style={{listStyle: 'none'}}>
                {dialogItems}
            </ul>
        </div>
    );
};
