import {connect} from 'react-redux';
import {Dialog} from './Dialog';
import {StoreType} from './../../../redux/redux-store';
import {MessageType, sendMessageAC, updateNewMessageAC} from './../../../redux/reducers/dialogsReducer';
import {ChangeEvent} from 'react';
import {Dispatch} from 'redux';

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        arrayMessages: state.dialogsReducer.arrayMessages,
        newMessageText: state.dialogsReducer.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageAC(event.currentTarget.value));
        },
    }
}

type mapStateToPropsType = {
    arrayMessages: MessageType[];
    newMessageText: string;
}
type mapDispatchToPropsType = {
    sendMessage: () => void;
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
export type DialogContainerType = mapStateToPropsType & mapDispatchToPropsType;

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
