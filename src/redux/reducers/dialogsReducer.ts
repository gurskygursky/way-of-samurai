export type MessageType = {
    id: number;
    message: string;
}
export type DialogType = {
    id: number;
    userName: string;
}
export type MessagesPageType = {
    arrayMessages: MessageType[],
    arrayDialogs: DialogType[],
    newMessageText: string;
}

const initialState: MessagesPageType = {
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
}
export const dialogsReducer = (state = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            // const newMessage = {id: 111, message: state.newMessageText};
            // state.arrayMessages.push(newMessage);
            // state.newMessageText = '';
            // return state;
            const newMessage = {id: 111, message: state.newMessageText};
            const copyState = {...state};
            copyState.arrayMessages.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        }
        case 'UPDATE_NEW_MESSAGE': {
            const copyState = {...state};
            copyState.newMessageText = action.newMessageText;
            return copyState;
            // state.newMessageText = action.newMessageText;
            // return state;
        }
        default:
            return state;
    }
};

//action types
export type DialogsActionsType =
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateNewMessageAC>;

//action creator
export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}
export const updateNewMessageAC = (newMessageText: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE',
        newMessageText,
    } as const
}
