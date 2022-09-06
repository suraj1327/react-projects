import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/_app.scss";

function Nav() {
  return (
    <nav className="nav-links ">
      <ul className="ul-class">
        <NavLink activeClassName="active" exact to="/">
          <li className="list-class">Home</li>
        </NavLink>
        <NavLink activeClassName="active" exact to="/About">
          <li className="list-class">About</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
