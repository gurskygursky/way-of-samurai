import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {Profile} from './components/profile/Profile';
import {Messages} from './components/messages/Messages';


export function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Footer/>
            <div className={"app-wrapper-content"}>
                <Profile/>
                {/*<Messages/>*/}
            </div>
        </div>
    );
}
