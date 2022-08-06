import {combineReducers, createStore} from 'redux';
import {DialogsActionsType, dialogsReducer} from './reducers/dialogsReducer';
import {ProfileActionsType, profileReducer} from './reducers/profileReducer';
import {usersReducer} from './../redux/reducers/usersReducer';

const reducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
});

export const store = createStore(reducer);

//types
export type StoreType = ReturnType<typeof store.getState>;
export type ActionsType = ProfileActionsType | DialogsActionsType;
