import React from 'react';
import style from './Dialog.module.css';
import {Link} from 'react-router-dom';

export const Dialog = () => {
    return (
        <div className={style.dialogsList}>
            <ul style={{listStyle: 'none'}}>
                <li>
                    <Link to={'/messages/dimych'} className={style.dialog}>
                        Dimych
                    </Link>
                </li>
                <li>
                    <Link to={'/messages/sveta'} className={style.dialog}>
                        Sveta
                    </Link>
                </li>
                <li>
                    <Link to={'/messages/valera'} className={style.dialog}>
                        Valera
                    </Link>
                </li>
                <li>
                    <Link to={'/messages/viktor'} className={style.dialog}>
                        Viktor
                    </Link>
                </li>
            </ul>
        </div>
    );
};
