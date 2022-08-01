import {StateType, ActionsTypes} from './../../redux/store';

export const profileReducer = (state: StateType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPostText = {id: 3, postText: state.profilePage.newPost, likesCount: 33};
            state.profilePage.arrayPosts.push(newPostText);
            state.profilePage.newPost = '';
            return state;
        }
        case 'UPDATE_NEW_POST': {
            state.profilePage.newPost = action.newPostText;
            return state;
        }
        default:
            return state;
    }
};

export type ProfileActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostAC>;

//action creator
export const addPostAC = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export const updateNewPostAC = (newPostText: string) => {
    return {
        type: 'UPDATE_NEW_POST',
        newPostText,
    } as const
}