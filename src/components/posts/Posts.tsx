import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Post} from '../../components/posts/Post/Post';
// import {PostType} from '../../index';
import {PostType} from '../../redux/state';

type PostsPropsType = {
    // state: stateType;
    arrayPosts: PostType[];
    // addPost: (newPostText: string) => void;
    addPost: () => void;
    newPost: string;
    updateNewPost: (newPostText: string) => void;
}
export const Posts = (props: PostsPropsType) => {

    const postItems = props.arrayPosts.map((item: PostType) => <Post postText={item.postText} likesCount={item.likesCount}/>);

    const [inputValue, setInputValue] = useState<string>('');

    const addPost = () => {
        props.addPost();
        console.log(props.arrayPosts);
        // setInputValue('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addPost();
            // setInputValue('');
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        props.updateNewPost(event.currentTarget.value);
        // setInputValue(event.currentTarget.value);
    }


    return (
        <div>
            MY POST
            <div>
                {/*<input value={inputValue} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>*/}
                <input value={props.newPost} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postItems}
        </div>
    );
};
