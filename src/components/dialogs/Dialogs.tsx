import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from '../../components/dialogs/Dialog/DialogItem/DialogItem';
// import {DialogType} from '../../index';
import {DialogType} from '../../redux/state';

type DialogsPropsType = {
    // state: stateType;
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
