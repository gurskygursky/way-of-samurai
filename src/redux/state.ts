export type MessageType = {
    id: number;
    message: string;
}
export type DialogType = {
    id: number;
    userName: string;
}
export type PostType = {
    id: number;
    postText: string;
    likesCount: number;
}
export type stateType = {
    arrayMessages: MessageType[],
    arrayDialogs: DialogType[],
    arrayPosts: PostType[],
}

export const state: stateType = {
    arrayMessages: [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Hello World!'},
    ],
    arrayDialogs: [
        {id: 1, userName: 'Dimych'},
        {id: 2, userName: 'Igor'},
        {id: 3, userName: 'Valera'},
        {id: 4, userName: 'Viktor'},
        {id: 5, userName: 'Sveta'},
    ],
    arrayPosts: [
        {id: 1, postText: 'My first post!', likesCount: 10},
        {id: 2, postText: 'My second post!', likesCount: 10},
    ],
}

export const addPost = (newPostText: string) => {
    const newPost = {id: 3, postText: newPostText, likesCount: 33};
    state.arrayPosts.push(newPost);
}
