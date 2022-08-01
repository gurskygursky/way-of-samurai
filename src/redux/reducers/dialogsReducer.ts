import {StateType, ActionsTypes} from './../../redux/store';

export const dialogsReducer = (state: StateType, action: ActionsTypes) => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            const newMessage = {id: 111, message: state.messagesPage.newMessageText};
            state.messagesPage.arrayMessages.push(newMessage);
            state.messagesPage.newMessageText = '';
            return state;
        }
        case 'UPDATE_NEW_MESSAGE': {
            state.messagesPage.newMessageText = action.newMessageText;
            return state;
        }
        default:
            return state;
    }
};

export type DialogsActionsType =
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateNewMessageAC>;

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
