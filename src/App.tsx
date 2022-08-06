import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {Profile} from './components/profile/Profile';
import {Messages} from './components/messages/Messages';
import {Route, Routes} from 'react-router-dom';
import {ActionsType, StoreType} from './redux/redux-store';
import {UsersContainer} from './components/users/UsersContainer';

type AppPropsType = {
    // store: StoreType;
    // dispatch: (action: ActionsType) => void;
}

export const App = (props: AppPropsType) => {

    // const profilePage = props.store.profileReducer;
    // const messagesPage = props.store.dialogsReducer;

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Footer/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile
                        // arrayPosts={profilePage.arrayPosts}
                        //                                      dispatch={props.dispatch.bind(props.store)}
                        //                                      newPost={props.store.profileReducer.newPost}
                    />
                    }/>
                    <Route path={'/messages'} element={<Messages
                        // arrayDialogs={messagesPage.arrayDialogs}
                        //                                          arrayMessages={messagesPage.arrayMessages}
                        //                                          newMessageText={messagesPage.newMessageText}
                        //                                          dispatch={props.dispatch.bind(props.store)}
                    />
                    }/>
                    <Route path={'/users'} element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    );
}
