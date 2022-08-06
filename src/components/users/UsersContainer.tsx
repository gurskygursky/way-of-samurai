import {Users} from './../../components/users/Users';
import {StoreType} from './../../redux/redux-store';
import {Dispatch} from 'redux';
import { connect } from 'react-redux';
import {followUserAC, setUsersAC, unfollowUserAC, UserType} from './../../redux/reducers/usersReducer';

type MapStateToPropsType = {
    arrayUsers: UserType[],
}
type MapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}
export type UserContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        arrayUsers: state.usersReducer.arrayUsers,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        follow: (userID: number) => {
            dispatch(followUserAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowUserAC(userID));
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);