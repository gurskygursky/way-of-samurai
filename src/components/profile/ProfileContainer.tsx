import React from 'react';
import {Profile} from './Profile';
import {connect, ConnectedProps} from 'react-redux';
import {StoreType} from './../../redux/redux-store';
import {PostType, setUserProfileAC} from '../../redux/reducers/profileReducer';

type Nullable = string | null;

export type ContactsResponseType = {
    facebook: Nullable,
    website: Nullable,
    vk: Nullable,
    twitter: Nullable,
    instagram: Nullable,
    youtube: Nullable,
    github: Nullable,
    mainLink: Nullable
}
export type UsersPhotosResponseType = {
    small: Nullable;
    large: Nullable;
}
export type UserProfileResponseType = {
    aboutMe: string;
    contacts: ContactsResponseType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: UsersPhotosResponseType;
}

type MapStateToPropsType = {
    profile: UserProfileResponseType;
    arrayPosts: PostType[],
    newPost: string,
}
const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile,
        arrayPosts: state.profileReducer.arrayPosts,
        newPost: state.profileReducer.newPost,
    }
}

export const ConnectComponent = connect(mapStateToProps, {
    setUserProfileAC
});

export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const ProfileContainer = ConnectComponent(Profile);