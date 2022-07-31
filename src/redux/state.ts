import {rerenderEntireTree} from '../index';
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
export type profilePageType = {
    arrayPosts: PostType[],
    newPost: string,
}
export type messagesPageType = {
    arrayMessages: MessageType[],
    arrayDialogs: DialogType[],
    newMessageText: string;
}
export type StateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType,
    // arrayMessages: MessageType[],
    // arrayDialogs: DialogType[],
    // arrayPosts: PostType[],
    // newPost: string,
}
// let callSubscriber = () => {
//     console.log('state changed');
// }
// export const state: stateType = {
//     arrayMessages: [
//         {id: 1, message: 'Yo!'},
//         {id: 2, message: 'Hello!'},
//         {id: 3, message: 'Hello World!'},
//     ],
//     arrayDialogs: [
//         {id: 1, userName: 'Dimych'},
//         {id: 2, userName: 'Igor'},
//         {id: 3, userName: 'Valera'},
//         {id: 4, userName: 'Viktor'},
//         {id: 5, userName: 'Sveta'},
//     ],
//     arrayPosts: [
//         {id: 1, postText: 'My first post!', likesCount: 10},
//         {id: 2, postText: 'My second post!', likesCount: 10},
//     ],
//     newPost: 'newpost',
// }

// export const addPost = (newPostText: string) => {
//     const newPost = {id: 3, postText: newPostText, likesCount: 33};
//     state.arrayPosts.push(newPost);
// }
// export const addPost = () => {
//     const newPostText = {id: 3, postText: state.newPost, likesCount: 33};
//     state.arrayPosts.push(newPostText);
//     state.newPost = '';
//     rerenderEntireTree(state);
// }
// export const updateNewPost = (newPostText: string) => {
//     state.newPost = newPostText;
//     rerenderEntireTree(state);
// }
// export const subscribe = (observer: any) => {
// callSubscriber = observer;
// }

export type StoreType = {
    _state: StateType;
    addPost: () => void;
    updateNewPost: (newPostText: string) => void;
    _onChange: () => void;
    subscribe: (callback: () => void) => void;
    getState: () => StateType;
    sendMessage: () => void;
    updateNewMessage: (newMessageText: string) => void;
}

export const store: StoreType = {
    _state: {
        messagesPage: {
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
            newMessageText: 'aksda;sf'
        },
        profilePage: {
            arrayPosts: [
                {id: 1, postText: 'My first post!', likesCount: 10},
                {id: 2, postText: 'My second post!', likesCount: 10},
            ],
            newPost: 'newpost',
        },
    },
        addPost () {
            const newPostText = {id: 3, postText: this._state.profilePage.newPost, likesCount: 33};
            this._state.profilePage.arrayPosts.push(newPostText);
            this._state.profilePage.newPost = '';
            this._onChange();
        },
    updateNewPost (newPostText: string) {
        this._state.profilePage.newPost = newPostText;
        this._onChange();
    },
    sendMessage () {
        const newMessage = {id: 111, message: this._state.messagesPage.newMessageText};
        this._state.messagesPage.arrayMessages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._onChange();
    },
    updateNewMessage (newMessageText: string) {
        this._state.messagesPage.newMessageText = newMessageText;
        this._onChange();
    },
    _onChange () {
        console.log('state changed');
    },
    subscribe (callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state;
    },
}
