import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// export let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                // store={store.getState()}
                //  dispatch={store.dispatch.bind(store)}
            />
            </Provider>
        </BrowserRouter>
    );
// }

// rerenderEntireTree();
// store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
