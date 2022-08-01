import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { store } from './redux/store';
// import {store} from './redux/state';

// export type MessageType = {
//     id: number;
//     message: string;
// }
// export type DialogType = {
//     id: number;
//     userName: string;
// }
// export type PostType = {
//     id: number;
//     postText: string;
//     likesCount: number;
// }
//
// const arrayMessages: MessageType[] = [
//     {id: 1, message: 'Yo!'},
//     {id: 2, message: 'Hello!'},
//     {id: 3, message: 'Hello World!'},
// ];
// const arrayDialogs: DialogType[] = [
//     {id: 1, userName: 'Dimych'},
//     {id: 2, userName: 'Igor'},
//     {id: 3, userName: 'Valera'},
//     {id: 4, userName: 'Viktor'},
//     {id: 5, userName: 'Sveta'},
// ];
// const arrayPosts: PostType[] = [
//     {id: 1, postText: 'My first post!', likesCount: 10},
//     {id: 2, postText: 'My second post!', likesCount: 10},
// ];
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     // <React.StrictMode>
//     <BrowserRouter>
//         <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
//     </BrowserRouter>
//     // </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export let rerenderEntireTree = () => {


    root.render(
        // <React.StrictMode>
            <BrowserRouter>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
                 // addPost={store.addPost}
                 // newPost={store._state.profilePage.newPost}
                // updateNewPost={store.updateNewPost}
            />
                </BrowserRouter>
        // </React.StrictMode>
    );}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
