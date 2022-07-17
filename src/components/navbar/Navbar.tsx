import React from 'react';

export const Navbar = () => {
    return (
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
    );
};
