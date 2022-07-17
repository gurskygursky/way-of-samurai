import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={'nav'}>
            <div style={{padding: '10px 0 0 10px'}}>
                <div>
                    <Link to={'/profile'}>Profile</Link>
                    {/*<a href={'/profile'}>Profile</a>*/}
                </div>
                <div>
                    {/*<a href={'/news'}>News</a>*/}
                    <Link to={'/news'}>News</Link>
                </div>

                <div>
                    <Link to={'/messages'}>Messages</Link>
                    {/*<a href={'/messages'}>Messages</a>*/}
                </div>
                <div>
                    {/*<a href={'/music'}>Music</a>*/}
                    <Link to={'/music'}>Music</Link>
                </div>
                <div>
                    <Link to={'/settings'}>Settings</Link>
                    {/*<a href={'/settings'}>Settings</a>*/}
                </div>
            </div>
        </div>
    );
};
