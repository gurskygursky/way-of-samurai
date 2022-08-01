import React from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';
import {PostType} from '../../redux/reducers/profileReducer';
import {ActionsType} from '../../redux/redux-store';

type ProfilePropsType = {
    arrayPosts: PostType[];
    newPost: string;
    dispatch: (action: ActionsType) => void;
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
