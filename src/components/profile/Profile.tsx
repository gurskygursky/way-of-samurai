import React from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';
import {PostType} from '../../index';

type ProfilePropsType = {
    arrayPosts: PostType[];
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileDescription/>
            <Posts arrayPosts={props.arrayPosts}/>
        </div>
    );
};
