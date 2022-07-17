import React from 'react';

type PostPropsType = {
    postText: string;
    likesCount: number;
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            <span style={{paddingRight: '10px'}}>Post: {props.postText}</span>
            <span>Like: {props.likesCount}</span>
        </div>
    );
};
