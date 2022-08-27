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
            {/*<div>{props.profile.photos.large === null*/}
            {/*    ? <img src={noAvatar} alt={"none_avatar_image"}/>*/}
            {/*    : <img src={props.profile.photos.large} alt={'small_avatar_image'}/>*/}
            {/*}*/}
            {/*</div>*/}
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{JSON.stringify(props.profile.lookingForAJob)}</div>
            <div>{props.profile.userId}</div>
            {/*<div>PROFILE IMAGE BACKGROUND</div>*/}
            {/*<div>*/}
            {/*    AVA+DESCRIPTION*/}
            {/*</div>*/}
        </div>
    );
};

