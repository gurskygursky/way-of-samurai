import React from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';
// import {PostType} from '../../index';
import {PostType, stateType} from './../../redux/state';

type ProfilePropsType = {
    // state: stateType;
    arrayPosts: PostType[];
    addPost: (newPostText: string) => void;
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileDescription/>
            <Posts arrayPosts={props.arrayPosts} addPost={props.addPost}/>
        </div>
    );
};
