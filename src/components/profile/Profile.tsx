import React from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';
import {ActionsTypes, PostType} from './../../redux/state';

type ProfilePropsType = {
    arrayPosts: PostType[];
    newPost: string;
    dispatch: (action: ActionsTypes) => void;
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileDescription/>
            <Posts arrayPosts={props.arrayPosts}
                   newPost={props.newPost}
                   dispatch={props.dispatch}
            />
        </div>
    );
};
