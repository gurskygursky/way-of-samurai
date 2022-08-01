import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from '../../components/posts/Post/Post';
import {ActionsTypes, addPostAC, PostType, updateNewPostAC} from '../../redux/state';

type PostsPropsType = {
    arrayPosts: PostType[];
    newPost: string;
    dispatch: (action: ActionsTypes) => void;
}

export const Posts = (props: PostsPropsType) => {

    const postItems = props.arrayPosts.map((item: PostType) => <Post postText={item.postText}
                                                                     likesCount={item.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostAC());
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPost();
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostAC(event.currentTarget.value));
    }

    return (
        <div>
            MY POST
            <div>
                <textarea value={props.newPost}
                          onChange={onChangeHandler}
                          onKeyDown={onKeyPressHandler}
                          maxLength={300}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            {postItems}
        </div>
    );
};
