import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Post} from '../../components/posts/Post/Post';
// import {PostType} from '../../index';
import {PostType} from '../../redux/state';

type PostsPropsType = {
    // state: stateType;
    arrayPosts: PostType[];
    // addPost: (newPostText: string) => void;
    // addPost: () => void;
    newPost: string;
    dispatch: (action: any) => void;
    // updateNewPost: (newPostText: string) => void;
}
export const Posts = (props: PostsPropsType) => {

    const postItems = props.arrayPosts.map((item: PostType) => <Post postText={item.postText} likesCount={item.likesCount}/>);

    const [inputValue, setInputValue] = useState<string>('');

    const addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD_POST'});
        console.log(props.arrayPosts);
        // setInputValue('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPost();
            // setInputValue('');
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement> ) => {
        // props.updateNewPost(event.currentTarget.value);
        props.dispatch({type: 'UPDATE_NEW_POST', newPostText: event.currentTarget.value});
        // setInputValue(event.currentTarget.value);
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
                {/*<input value={inputValue} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>*/}
                {/*<input value={props.newPost} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>*/}
                <button onClick={addPost}>Add post</button>
            </div>
            {postItems}
        </div>
    );
};
