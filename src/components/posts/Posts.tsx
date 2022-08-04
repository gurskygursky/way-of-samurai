import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from '../../components/posts/Post/Post';
import {addPostAC, PostType, updateNewPostAC} from '../../redux/reducers/profileReducer';
import {ActionsType, store} from '../../redux/redux-store';
import {PostsContainerPropsType} from './../../components/posts/PostsContainer';

// type PostsPropsType = {
//     arrayPosts: PostType[];
//     newPost: string;
//     // dispatch: (action: ActionsType) => void;
//     addPost: () => void;
//     onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
// }

export const Posts = (props: PostsContainerPropsType) => {

    const postItems = props.arrayPosts.map((item: PostType) => <Post postText={item.postText}
                                                                     likesCount={item.likesCount}/>);

    const addPost = () => {
        props.addPost();
        // props.dispatch(addPostAC());
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPost();
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(event);
        // props.dispatch(updateNewPostAC(event.currentTarget.value));
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
