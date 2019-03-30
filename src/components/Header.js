import React from 'react';
import './Header.css';
import Search from './Search';
import {Link} from "react-router-dom";
import NavBar from './NavBar';
import BreadCrumb from './BreadCrumb';

const Header = () => (
  <header className="App-header navbar navbar-expand-md bg-light">
    <section>
      <Link to="/">
        <img className="App-logo" src={'/assets/images/oknesset-logo.png'} width="1rem" alt={'logo'}/>
      </Link>

      <span className="App-header-title">כנסת פתוחה</span>
      {/*<Search/>*/}
    </section>
    <section>
      <NavBar/>
    </section>
    <section>
      <BreadCrumb/>
    </section>
  </header>
);
export default Header;