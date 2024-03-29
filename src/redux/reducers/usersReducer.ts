import {UsersResponseType} from '../../components/users/Users';

// type UsersPhotosResponseType = {
//     small: string;
//     large: string;
// }

// type UsersType = {
//     name: string;
//     id: number;
//     uniqueUrlName: null;
//     photos: UsersPhotosResponseType;
//     status: null;
//     followed: boolean;
// }

// type InitialStateType = {
//     arrayUsers: UsersResponseType[],
//     pageSize: number;
//     totalCount: number;
//     currentPage: number;
//     isFetching: boolean;
// }

const initialState = {
    arrayUsers: [] as UsersResponseType[],
    pageSize: 7,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
};
type InitialStateType = typeof initialState;


export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                arrayUsers: [...action.users],
            };
        case 'SET_USERS_TOTAL_COUNT':
            return {
                ...state, totalCount: action.totalCount,
            }
        case 'FOLLOW':
            return {
                ...state,
                arrayUsers: state.arrayUsers.map(user => user.id === action.userID ? {...user, followed: true} : user)
            };
        case 'UNFOLLOW':
            return {
                ...state,
                arrayUsers: state.arrayUsers.map((user) => user.id === action.userID ? {
                    ...user,
                    followed: false
                } : user)
            };
        case 'SELECT_PAGE':
            return {
                ...state, currentPage: action.selectedPage
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setUsers = (users: UsersResponseType[]) => {
    return {
        type: 'SET_USERS',
        users,
    } as const
}
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: 'SET_USERS_TOTAL_COUNT',
        totalCount,
    } as const
}
export const followUser = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}
export const unfollowUser = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID,
    } as const
}
export const selectPage = (selectedPage: number) => {
    return {
        type: 'SELECT_PAGE',
        selectedPage,
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const
}

type SetUsersActionType = ReturnType<typeof setUsers>;
type SetUsersTotalCountActionType = ReturnType<typeof setUsersTotalCount>;
type FollowUserActionType = ReturnType<typeof followUser>;
type UnfollowUserActionType = ReturnType<typeof unfollowUser>;
type SelectPageActionType = ReturnType<typeof selectPage>;
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;

export type UsersActionsType =
    FollowUserActionType |
    UnfollowUserActionType |
    SetUsersActionType |
    SetUsersTotalCountActionType |
    SelectPageActionType |
    ToggleIsFetchingActionType;
