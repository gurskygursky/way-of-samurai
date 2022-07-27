import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Post} from '../../components/posts/Post/Post';
// import {PostType} from '../../index';
import {PostType, stateType} from '../../redux/state';

type PostsPropsType = {
    // state: stateType;
    arrayPosts: PostType[];
    addPost: (newPostText: string) => void;
}
export const Posts = (props: PostsPropsType) => {

    const postItems = props.arrayPosts.map((item: PostType) => <Post postText={item.postText} likesCount={item.likesCount}/>);

    const [inputValue, setInputValue] = useState<string>('');

    const addPost = () => {
        props.addPost(inputValue);
        setInputValue('');
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addPost();
            setInputValue('');
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(event.currentTarget.value);
    }


    return (
        <div>
            MY POST
            <div>
                <input value={inputValue} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postItems}
        </div>
    );
};
