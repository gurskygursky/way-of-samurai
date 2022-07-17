import React from 'react';
import {Posts} from '../../components/posts/Posts';
import {ProfileDescription} from '../../components/profile/ProfileDescription';

export const Profile = () => {
    return (
        <div>
            <ProfileDescription/>
            <Posts/>
        </div>
    );
};
