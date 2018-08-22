import React from 'react';
import Search from './Search';
import {Link} from "react-router-dom";
import NavBar from './NavBar';
import BreadCrumb from './BreadCrumb';

const Header = () => (
	<header className="App-header">
		<Link to="/">
			<img className="App-logo" src={'assets/images/oknesset-logo.png'}/>
		</Link>

		<span className="title">כנסת פתוחה</span>
		<Search/>
		<NavBar/>
		<BreadCrumb/>
	</header>
);
export default Header;