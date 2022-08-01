export type PostType = {
    id: number;
    postText: string;
    likesCount: number;
}
export type ProfilePageType = {
    arrayPosts: PostType[],
    newPost: string,
}
const initialState: ProfilePageType = {
            arrayPosts: [
                {id: 1, postText: 'My first post!', likesCount: 10},
                {id: 2, postText: 'My second post!', likesCount: 10},
            ],
            newPost: 'newpost',
        }
export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPostText = {id: 3, postText: state.newPost, likesCount: 33};
            state.arrayPosts.push(newPostText);
            state.newPost = '';
            return state;
        }
        case 'UPDATE_NEW_POST': {
            state.newPost = action.newPostText;
            return state;
        }
        default:
            return state;
    }
};

//action types
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
