import React from "react";
import './App.css';


export function App() {
    return (
        <div className={"app-wrapper"}>
            <div className={'header'}>
                WAY_OF_SAMURAI
            </div>
            <div className={'nav'}>
                <div style={{padding: '10px 0 0 10px'}}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
                </div>
            </div>
            <div className={'content'}>
                <div>PROFILE IMAGE BACKGROUND</div>
                <div>
                    AVA+DESCRIPTION
                </div>
                <div>
                    MY POST
                    <div>NEW POST</div>
                    <div>
                        POST 1
                    </div>
                    <div>
                        POST 1
                    </div>
                </div>
            </div>
            <div className={'footer'}>
                FOOTER
            </div>
          {/*<div className={"app-wrapper-content"}></div>*/}
        </div>
    );
}
