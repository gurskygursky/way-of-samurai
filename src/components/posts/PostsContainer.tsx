import { Dispatch } from "redux";
import { StoreType } from "../../redux/redux-store";
import {addPostAC, PostType, updateNewPostAC} from './../../redux/reducers/profileReducer';
import { ChangeEvent } from "react";
import {connect} from 'react-redux';
import { Posts } from "./Posts";

type mapStateToPropsType = {
    arrayPosts: PostType[];
    newPost: string;
}
type mapDispatchToProps = {
    addPost: () => void;
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        arrayPosts: state.profileReducer.arrayPosts,
        newPost: state.profileReducer.newPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostAC(event.currentTarget.value));
        }
    }
}

export type PostsContainerPropsType = mapStateToPropsType & mapDispatchToProps;

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);