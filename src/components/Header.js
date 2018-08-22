import React from 'react';
import Search from './Search';
import {NavLink, Link} from "react-router-dom";

const Header = () => (
	<div className="App-header">
		<Link to="/">
			<img className="App-logo" src={'assets/images/oknesset-logo.png'}/>
		</Link>

		<span className="title">כנסת פתוחה</span>
		<Search/>
		<NavLink to="/members" activeClassName="selected">members</NavLink>
		<NavLink to="/committees" activeClassName="selected">committees</NavLink>
	</div>
);
export default Header;