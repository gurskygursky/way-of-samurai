import React from 'react';
import {Link} from 'react-router-dom';
import style from './DialogItem.module.css';

type DialogItemPropsType = {
    userName: string;
}

export const DialogItem = (props: DialogItemPropsType) => {
    const path = `/messages/${props.userName.toLocaleLowerCase()}`
    return (
        <li>
            <Link to={path} className={style.dialog}>
                {props.userName}
            </Link>
        </li>
    );
}
