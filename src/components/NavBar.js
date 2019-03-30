import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';


const NavBar = () => (
  <ul className="NavBar nav ">
    {/*<li className="nav-item">*/}
    {/*  <NavLink to="/members" activeClassName="selected">ח"כים וסיעות</NavLink>*/}
    {/*</li>*/}
    <li className="nav-item">
      <NavLink to="/committees-by-knesset" activeClassName="selected">ועדות</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/legislation-by-knesset" activeClassName="selected">הצעות חוק</NavLink>
    </li>
  </ul>
);

export default NavBar;