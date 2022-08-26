import axios from 'axios';
import React, {useEffect} from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';
import {PostType} from '../../redux/reducers/profileReducer';
import {ActionsType} from '../../redux/redux-store';
import {PostsContainer} from './../../components/posts/PostsContainer';
import {ProfileContainerPropsType} from './ProfileContainer';
import {Preloader} from './../../assets/preloader/Preloader';
import noAvatar from './../../assets/images/noAvatar.png';

type ProfilePropsType = {
    // arrayPosts: PostType[];
    // newPost: string;
    // dispatch: (action: ActionsType) => void;
}
export const Profile = (props: ProfileContainerPropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ + ${2}`)
            .then(response => props.setUserProfileAC(response.data));
    }, []);

    let userID = props.profile.userId;

    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            {/*<div style={{maxWidth: '128px', maxHeight: '128px'}}>*/}
            {/*    {props.profile.photos.small === null*/}
            {/*    ? <img src={noAvatar} alt={"avatar_image"}/>*/}
            {/*    : <img src={props.profile.photos.small} alt={'avatar_image'}/>}*/}
            {/*</div>*/}
            {/*<img style={{maxWidth: '128px', maxHeight: '128px'}}*/}
            {/*     src={props.profile.photos.small ? props.profile.photos.small : noAvatar}*/}
            {/*     alt={'not avatar images'}*/}
            {/*/>*/}
            {/*<div>{props.profile.fullName}</div>*/}
            {/*<div>{props.profile.lookingForAJobDescription}</div>*/}
            {/*<div>{JSON.stringify(props.profile.lookingForAJob)}</div>*/}
            {/*<div>{props.profile.userId}</div>*/}
            <ProfileDescription {...props} />
            <PostsContainer/>
            {/*<Posts arrayPosts={props.arrayPosts}*/}
            {/*       newPost={props.newPost}*/}
            {/*       dispatch={props.dispatch}*/}
            {/*/>*/}
        </div>
    );
};
