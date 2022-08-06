type UserType = {
    id: number;
    firstName: string;
    secondName: string;
    status: string;
    isFollow: boolean;
    location: {
        country: string;
        city: string;
    }
}

const initialState = {
    arrayUsers: [
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
    ] as UserType[],
};

export type InitialStateType = typeof initialState;

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                arrayUsers: [...state.arrayUsers, ...action.users]
            };
        case 'FOLLOW':
            return {
                ...state,
                arrayUsers: state.arrayUsers.map(user => user.id === action.userID ? {...user, isFollow: true} : user)
            };
        case 'UNFOLLOW':
            return {
                ...state,
                arrayUsers: state.arrayUsers.map(user => user.id === action.userID ? {...user, isFollow: false} : user)
            };
        default:
            return state;
    }
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const followUserAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}
export const unfollowUserAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID,
    } as const
}

type SetUsersActionType = ReturnType<typeof setUsersAC>;
type FollowUserActionType = ReturnType<typeof followUserAC>;
type UnfollowUserActionType = ReturnType<typeof unfollowUserAC>;

export type UsersActionsType =
    FollowUserActionType |
    UnfollowUserActionType |
    SetUsersActionType;