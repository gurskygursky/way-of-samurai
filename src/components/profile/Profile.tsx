import axios from 'axios';
import React, {useEffect} from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';
import {PostType} from '../../redux/reducers/profileReducer';
import {ActionsType} from '../../redux/redux-store';
import {PostsContainer} from './../../components/posts/PostsContainer';
import {ProfileContainerPropsType} from './ProfileContainer';
import {Preloader} from './../../assets/preloader/Preloader';

type ProfilePropsType = {
    // arrayPosts: PostType[];
    // newPost: string;
    // dispatch: (action: ActionsType) => void;
}
export const Profile = (props: ProfileContainerPropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/18933`)
            .then(response => props.setUserProfileAC(response.data));
    }, []);

    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <ProfileDescription {...props}/>
            <PostsContainer/>
            {/*<Posts arrayPosts={props.arrayPosts}*/}
            {/*       newPost={props.newPost}*/}
            {/*       dispatch={props.dispatch}*/}
            {/*/>*/}
        </div>
    );
};
