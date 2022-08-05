import {DialogType} from './../../../redux/reducers/dialogsReducer';
import {connect} from 'react-redux';
import { StoreType } from '../../../redux/redux-store';
import {Dialogs} from './../../../components/dialogs/Dialogs';

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        arrayDialogs: state.dialogsReducer.arrayDialogs,
    }
}

type mapStateToPropsType = {
    arrayDialogs: DialogType[];
}

export type DialogsContainerType = mapStateToPropsType;

export const DialogsContainer = connect(mapStateToProps)(Dialogs);