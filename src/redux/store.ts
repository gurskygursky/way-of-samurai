import {ProfileActionsType, profileReducer} from '../redux/reducers/profileReducer';
import {DialogsActionsType} from '../redux/reducers/dialogsReducer';
import {dialogsReducer} from './reducers/dialogsReducer';

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
}

export type StoreType = {
    _state: StateType;
    _onChange: () => void;
    subscribe: (callback: () => void) => void;
    getState: () => StateType;
    dispatch: (action: ActionsTypes) => void;
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
    _onChange() {
        console.log('state changed');
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        dialogsReducer(this._state, action);
        profileReducer(this._state, action);
        this._onChange();
    },
};

export type ActionsTypes = ProfileActionsType | DialogsActionsType;
