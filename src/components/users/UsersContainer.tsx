import {Users, UsersResponseType} from './../../components/users/Users';
import {StoreType} from './../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
    followUserAC,
    selectPageAC,
    setUsersAC, setUsersTotalCountAC, ToggleIsFetchingAC,
    unfollowUserAC,
} from './../../redux/reducers/usersReducer';

type MapStateToPropsType = {
    arrayUsers: UsersResponseType[],
    currentPage: number,
    pageSize: number,
    totalCount: number,
    isFetching: boolean,
}
type MapDispatchToPropsType = {
    setUsers: (users: UsersResponseType[]) => void;
    setUsersTotalCount: (totalCount: number) => void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    selectPage: (selectedPage: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
}
export type UserContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        arrayUsers: state.usersReducer.arrayUsers,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        isFetching: state.usersReducer.isFetching,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUsers: (users: UsersResponseType[]) => {
            dispatch(setUsersAC(users));
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        follow: (userID: number) => {
            dispatch(followUserAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowUserAC(userID));
        },
        selectPage: (selectedPage: number) => {
            dispatch(selectPageAC(selectedPage));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching));
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
