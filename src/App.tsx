import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {Profile} from './components/profile/Profile';
import {Messages} from './components/messages/Messages';
import {Route, Routes} from 'react-router-dom';
import {DialogType, MessageType, PostType} from './index';

type AppPropsType = {
    arrayMessages: MessageType[];
    arrayPosts: PostType[];
    arrayDialogs: DialogType[];
}

export function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Footer/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile arrayPosts={props.arrayPosts}/>}/>
                    <Route path={'/messages'} element={<Messages arrayDialogs={props.arrayDialogs}
                                                                 arrayMessages={props.arrayMessages}
                    />}/>
                </Routes>
            </div>
        </div>
    );
}
