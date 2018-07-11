import React from 'react';
import Search from './Search';

const Header = () => (
  <header className="App-header navbar navbar-expand-md fixed-top text-light bg-light">
        <img className="App-logo" src={"assets/images/oknesset-logo.png"}/>
        <span className="title">כנסת פתוחה</span>
        <Search/>
    </header>
);
export default Header;