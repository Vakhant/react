import React from "react";
import cls from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={cls.header}>
      <img className={cls.logo} width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flower01.svg" alt="" />
      {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
    </header>
  );
};

export default Header;
