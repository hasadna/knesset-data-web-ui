import React from 'react';
import Search from './Search';

const Header = () => (
    <div className="App-header">

        <img className="App-logo" src={"assets/images/oknesset-logo.png"}/>
        <span className="title">כנסת פתוחה</span>
        <Search/>
    </div>
);
export default Header;