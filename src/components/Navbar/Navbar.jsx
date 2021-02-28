import React from "react";
import cls from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={cls.nav}>
      <div>
        <NavLink activeClassName={cls.active} to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink activeClassName={cls.active} to="/dialogs">Message</NavLink>
      </div>
      <div>
        <NavLink activeClassName={cls.active} to="/users">Users</NavLink>
      </div>
      <div>
        <NavLink activeClassName={cls.active} to="/news">News</NavLink>
      </div>
      <div>
        <NavLink activeClassName={cls.active} to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink activeClassName={cls.active} to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
