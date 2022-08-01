import React from 'react';
import style from './Post.module.css';
import avatar from '../../../assets/images/avatar.png';

type PostPropsType = {
    postText: string;
    likesCount: number;
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={style.post}>
            <img src={avatar} alt={'avatar_image'}/>
            <span style={{paddingRight: '10px'}}>Post: {props.postText}</span>
            <span>Like: {props.likesCount}</span>
        </div>
    );
};
