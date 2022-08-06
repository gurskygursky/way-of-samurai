import React from 'react';
import {UserContainerPropsType} from './../../components/users/UsersContainer';

export const Users = (props: UserContainerPropsType) => {

    if (props.arrayUsers.length === 0) {
        props.setUsers([
            {
                id: 1,
                firstName: 'My first post!',
                secondName: '',
                status: '',
                isFollow: true,
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                firstName: 'My first post!',
                secondName: '',
                status: '',
                isFollow: false,
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                firstName: 'My first post!',
                secondName: '',
                status: '',
                isFollow: true,
                location: {country: 'Belarus', city: 'Minsk'}
            },
        ])
    }

    const onClickFollow = (userID: number) => {
        props.follow(userID);
    }
    const onClickUnfollow = (userID: number) => {
        props.unfollow(userID);
    }

    return (
        <div>
            {props.arrayUsers.map(user => <div key={user.id}>
                <div>{user.firstName}</div>
                <div>{user.status}</div>
                <div>
                    <span>{user.location.country}, </span>
                    <span>{user.location.city}</span>
                </div>
                <div>
                    {user.isFollow
                        ? <button onClick={() => onClickUnfollow(user.id)}>UNFOLLOW</button>
                        : <button onClick={() => onClickFollow(user.id)}>FOLLOW</button>
                    }
                </div>
            </div>)}
        </div>
    );
};
