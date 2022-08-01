import {combineReducers, createStore} from 'redux';
import {DialogsActionsType, dialogsReducer} from './reducers/dialogsReducer';
import {ProfileActionsType, profileReducer} from './reducers/profileReducer';

const reducer = combineReducers({
    profileReducer,
    dialogsReducer,
});

export const store = createStore(reducer);

//types
export type StoreType = ReturnType<typeof store.getState>;
export type ActionsType = ProfileActionsType | DialogsActionsType;
