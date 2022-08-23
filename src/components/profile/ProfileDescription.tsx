import React, {useEffect} from 'react';
import {ProfileContainerPropsType, UserProfileResponseType} from './ProfileContainer';
import {Preloader} from './../../assets/preloader/Preloader';
import axios from 'axios';

import noAvatar from './../../assets/images/noAvatar.png';

type ProfileDescriptionPropsType = {
    profile: UserProfileResponseType;
}

export const ProfileDescription = (props: ProfileDescriptionPropsType) => {

    return (
        <div>
            <div>{props.profile.photos.large ? props.profile.photos.small : noAvatar}</div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.userId}</div>
            {/*<div>PROFILE IMAGE BACKGROUND</div>*/}
            {/*<div>*/}
            {/*    AVA+DESCRIPTION*/}
            {/*</div>*/}
        </div>
    );
};

