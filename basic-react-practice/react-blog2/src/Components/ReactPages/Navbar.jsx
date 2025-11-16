import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="header">
      <div>
        <NavLink className="link" to={"/"}>
          <h2>Logo</h2>
        </NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/user/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/user/about">
              About
            </NavLink>
          </li>
           <li>
            <NavLink className="link" to="/college">
              College
            </NavLink>
          </li>
           <li>
            <NavLink className="link" to="/users">
              User
            </NavLink>
          </li>
           <li>
            <NavLink className="link" to="/users/list">
              List
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <Outlet />
    </div>
  );
};

export default Navbar;
