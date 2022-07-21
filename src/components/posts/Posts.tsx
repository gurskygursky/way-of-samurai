import React from 'react';
import {Post} from '../../components/posts/Post/Post';
// import {PostType} from '../../index';
import {PostType, stateType} from '../../redux/state';

type PostsPropsType = {
    // state: stateType;
    arrayPosts: PostType[];
}
export const Posts = (props: PostsPropsType) => {

    const postItems = props.arrayPosts.map((item: PostType) => <Post postText={item.postText} likesCount={item.likesCount}/>);

    return (
        <div>
            MY POST
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postItems}
        </div>
    );
};
