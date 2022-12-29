import classes from "./Header.module.css";
import Button from "../Button/Button";
import logo from "./../../imgs/logo.png";
import { NavLink } from "react-router-dom";

export default function Header({ authToken, updateAuthToken }) {
  function handleLogout() {
    updateAuthToken("");
  }

  return (
    <div className={classes.header}>
      <NavLink to={"/"}>
        <img className={classes.logo} src={logo} alt="logo" />
      </NavLink>
      <NavLink to={authToken ? "/" : "/login"}>
        <Button size="big" onClick={authToken ? handleLogout : null}>
          {authToken ? "Logout" : "Sign in"}
        </Button>
      </NavLink>
    </div>
  );
}
