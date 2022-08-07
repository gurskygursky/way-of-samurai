import React from 'react';
import {UserContainerPropsType} from './../../components/users/UsersContainer';
import axios from 'axios';

type UsersPhotosResponseType = {
    small: null;
    large: null;
}
export type UsersResponseType = {
    name: string;
    id: number;
    uniqueUrlName: null;
    photos: UsersPhotosResponseType;
    status: null;
    followed: boolean;
    totalCount: number;
    error: string | null;
}

export const Users = (props: UserContainerPropsType) => {

    if (props.arrayUsers.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                .then(response => props.setUsers(response.data.items));
        // props.setUsers([
        //     {
        //         id: 1,
        //         firstName: 'My first post!',
        //         secondName: '',
        //         status: '',
        //         isFollow: true,
        //         location: {country: 'Belarus', city: 'Minsk'}
        //     },
        //     {
        //         id: 2,
        //         firstName: 'My first post!',
        //         secondName: '',
        //         status: '',
        //         isFollow: false,
        //         location: {country: 'Belarus', city: 'Minsk'}
        //     },
        //     {
        //         id: 3,
        //         firstName: 'My first post!',
        //         secondName: '',
        //         status: '',
        //         isFollow: true,
        //         location: {country: 'Belarus', city: 'Minsk'}
        //     },
        // ])
    }

    const onClickFollow = (userID: number) => {
        props.follow(userID);
    }
    const onClickUnfollow = (userID: number) => {
        props.unfollow(userID);
    }

    return (
        <div>
            { props.arrayUsers.map(user => <div key={user.id}>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>
                    <span>{user.uniqueUrlName}, </span>
                    <span>{user.followed}</span>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => onClickUnfollow(user.id)}>UNFOLLOW</button>
                        : <button onClick={() => onClickFollow(user.id)}>FOLLOW</button>
                    }
                </div>
            </div>)}
        </div>
    );
};
