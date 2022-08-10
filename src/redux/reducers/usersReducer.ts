import {UsersResponseType} from './../../components/users/Users';

export  type UserType = {
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
        // {
        //     id: 1,
        //     firstName: 'My first post!',
        //     secondName: '',
        //     status: '',
        //     isFollow: true,
        //     location: {country: 'Belarus', city: 'Minsk'}
        // },
        // {
        //     id: 2,
        //     firstName: 'My first post!',
        //     secondName: '',
        //     status: '',
        //     isFollow: false,
        //     location: {country: 'Belarus', city: 'Minsk'}
        // },
        // {
        //     id: 3,
        //     firstName: 'My first post!',
        //     secondName: '',
        //     status: '',
        //     isFollow: true,
        //     location: {country: 'Belarus', city: 'Minsk'}
        // },
    // ] as UserType[],
    ] as UsersResponseType[],
    pageSize: 7,
    totalCount: 0,
    currentPage: 222,
};

export type InitialStateType = typeof initialState;

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                // arrayUsers: [...state.arrayUsers, ...action.users]
                arrayUsers: [...action.users],
            };
        case 'SET_USERS_TOTAL_COUNT':
            return {
                ...state, totalCount: action.totalCount,
            }
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
            case 'SELECT_PAGE':
                return {
                    ...state, currentPage: action.selectedPage
                }
        default:
            return state;
    }
}
// export const setUsersAC = (users: UserType[]) => {
export const setUsersAC = (users: UsersResponseType[]) => {
    return {
        type: 'SET_USERS',
        users,
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET_USERS_TOTAL_COUNT',
        totalCount,
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
export const selectPageAC = (selectedPage: number) => {
    return {
        type: 'SELECT_PAGE',
        selectedPage,
    } as const
}

type SetUsersActionType = ReturnType<typeof setUsersAC>;
type SetUsersTotalCountActionType = ReturnType<typeof setUsersTotalCountAC>;
type FollowUserActionType = ReturnType<typeof followUserAC>;
type UnfollowUserActionType = ReturnType<typeof unfollowUserAC>;
type SelectPageActionType = ReturnType<typeof selectPageAC>;

export type UsersActionsType =
    FollowUserActionType |
    UnfollowUserActionType |
    SetUsersActionType |
    SetUsersTotalCountActionType |
    SelectPageActionType;