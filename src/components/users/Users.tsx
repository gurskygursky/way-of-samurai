import React, {useEffect} from 'react';
import {UserContainerPropsType} from './../../components/users/UsersContainer';
import axios from 'axios';
import noAvatar from './../../assets/images/noAvatar.png';

type UsersPhotosResponseType = {
    small: string;
    large: string;
}
export type UsersResponseType = {
        name: string;
        id: number;
        uniqueUrlName: null;
        photos: UsersPhotosResponseType;
        status: null;
        followed: boolean;
    // totalCount: number;
    // error: string | null;
}

export const Users = (props: UserContainerPropsType) => {

    useEffect(() => {
            if (props.arrayUsers.length === 0) {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
                    .then(response => props.setUsers(response.data.items));
                axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                    .then(response => props.setUsersTotalCount(response.data.totalCount));
            }
        }
    , []);
    // useEffect(() => {
    //             axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
    //                 .then(response => props.setUsersTotalCount(response.data.totalCount))
    //                 .catch((error: string) => error);
    //     }
    // , []);
    // useEffect(() => {
    //         if (props.arrayUsers.length === 0) {
    //             axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
    //                 .then(response => props.setUsersTotalCount(response.data.totalCount))
    //                 .catch((error: string) => error);
    //         }
    //     }
    // , []);

    // if (props.arrayUsers.length === 0) {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
    //         .then(response => props.setUsers(response.data.items));
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
    // }

    const onClickFollow = (userID: number) => {
        props.follow(userID);
    }
    const onClickUnfollow = (userID: number) => {
        props.unfollow(userID);
    }
    const onClickSelected = (selectedPage: number) => {
        console.log(selectedPage)
        props.selectPage(selectedPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => props.setUsers(response.data.items));
    }

    const buttonsPageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= buttonsPageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => <span style={{cursor: 'pointer'}} onClick={() => onClickSelected(page)}>{page}</span>)}
            </div>
            {props.arrayUsers.map(user => <div style={{padding: '10px'}} key={user.id}>
                <div>{user.name}</div>
                <img style={{maxWidth: '128px', maxHeight: '128px'}}
                     src={user.photos.small ? user.photos.large : noAvatar}
                     alt={'none avatar image'}
                />
                <div>{user.status}</div>
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
