import React from 'react';
import {Post} from '../../components/posts/Post/Post';

export const Posts = () => {

    const arrayPosts = [
        {id: 1, postText: 'My first post!', likesCount: 10},
        {id: 2, postText: 'My second post!',  likesCount: 10},
    ];

    const postItems = arrayPosts.map(item => <Post postText={item.postText} likesCount={item.likesCount}/>);

    return (
        <div>
            MY POST
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postItems}
            {/*<Post postText={'My first post'} likesCount={10}/>*/}
            {/*<Post postText={'My second post'} likesCount={15}/>*/}
        </div>
    );
};
