import React from 'react';
import {UserContainerPropsType} from './../../components/users/UsersContainer';

export const Users = (props: UserContainerPropsType) => {

    const onClickFollow = () => {

    }

    return (
        <div>
            <div>
                <ul>
                    {props.arrayUsers.map(
                        user =>
                            <li>{user.firstName}
                                <button onClick={onClickFollow}>{user.isFollow ? 'Follow' : 'Unfollow'}</button>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
