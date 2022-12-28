import classes from "./Header.module.css";
import Button from "../Button/Button";
import logo from "./../../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <div className={classes.header}>
      <NavLink to={"/"}>
        <img className={classes.logo} src={logo} alt="logo" />
      </NavLink>
      <NavLink to="/login">
        <Button size="big">Sign in</Button>
      </NavLink>
    </div>
  );
}
