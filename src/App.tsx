import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {Profile} from './components/profile/Profile';
import {Messages} from './components/messages/Messages';
import {Route, Routes} from 'react-router-dom';
// import {DialogType, MessageType, PostType} from './index';
import {StoreType} from './redux/state';

type AppPropsType = {
    // state: stateType;
    store: StoreType;
    // addPost: (newPostText: string) => void;
    // addPost: () => void;
    // newPost: string;
    // updateNewPost: (newPostText: string) => void;
    // arrayMessages: MessageType[];
    // arrayPosts: PostType[];
    // arrayDialogs: DialogType[];
}

export function App(props: AppPropsType) {
    const state = props.store.getState();

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Footer/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile arrayPosts={state.profilePage.arrayPosts}
                                                             addPost={props.store.addPost.bind(props.store)}
                                                             newPost={state.profilePage.newPost}
                                                             updateNewPost={props.store.updateNewPost.bind(props.store)}/>}/>
                    <Route path={'/messages'} element={<Messages arrayDialogs={state.messagesPage.arrayDialogs}
                                                                 arrayMessages={state.messagesPage.arrayMessages}
                                                                 newMessageText={state.messagesPage.newMessageText}
                                                                 sendMessage={props.store.sendMessage.bind(props.store)}
                                                                 updateNewMessage={props.store.updateNewMessage.bind(props.store)}

                    />}/>
                </Routes>
            </div>
        </div>
    );
}
