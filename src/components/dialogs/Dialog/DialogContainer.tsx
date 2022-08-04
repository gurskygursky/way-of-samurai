import {connect} from 'react-redux';
import {Dialog} from './Dialog';
import {StoreType} from './../../../redux/redux-store';
import {sendMessageAC, updateNewMessageAC} from './../../../redux/reducers/dialogsReducer';
import {ChangeEvent} from 'react';
import {Dispatch} from 'redux';


const mapStateToProps = (state: StoreType) => {
    return {
        arrayMessages: state.dialogsReducer.arrayMessages
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageAC(event.currentTarget.value));
        }
    }
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
