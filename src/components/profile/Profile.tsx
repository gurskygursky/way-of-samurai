import React from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';
// import {PostType} from '../../index';
import {PostType} from './../../redux/state';

type ProfilePropsType = {
    // state: stateType;
    arrayPosts: PostType[];
    // addPost: (newPostText: string) => void;
    // addPost: () => void;
    newPost: string;
    // updateNewPost: (newPostText: string) => void;
    dispatch: (action: any) => void;
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileDescription/>
            {/*<Posts arrayPosts={props.arrayPosts} addPost={props.addPost} newPost={props.newPost} updateNewPost={props.updateNewPost}/>*/}
            <Posts arrayPosts={props.arrayPosts} newPost={props.newPost} dispatch={props.dispatch} />
        </div>
    );
};
