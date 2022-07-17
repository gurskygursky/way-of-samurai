import React from 'react';
import {Post} from '../../components/posts/Post/Post';

export const Posts = () => {
    return (
        <div>
            MY POST
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post postText={'My first post'} likesCount={10}/>
            <Post postText={'My second post'} likesCount={15}/>
        </div>
    );
};
