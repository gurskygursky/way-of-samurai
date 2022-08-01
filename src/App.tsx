import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {Profile} from './components/profile/Profile';
import {Messages} from './components/messages/Messages';
import {Route, Routes} from 'react-router-dom';
import {ActionsTypes, StoreType} from './redux/state';

type AppPropsType = {
    store: StoreType;
    dispatch: (action: ActionsTypes) => void;
}

export const App = (props: AppPropsType) => {

    const state = props.store.getState();

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Footer/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile arrayPosts={state.profilePage.arrayPosts}
                                                             dispatch={props.dispatch.bind(props.store)}
                                                             newPost={state.profilePage.newPost}/>
                    }/>
                    <Route path={'/messages'} element={<Messages arrayDialogs={state.messagesPage.arrayDialogs}
                                                                 arrayMessages={state.messagesPage.arrayMessages}
                                                                 newMessageText={state.messagesPage.newMessageText}
                                                                 dispatch={props.dispatch.bind(props.store)}/>
                    }/>
                </Routes>
            </div>
        </div>
    );
}
