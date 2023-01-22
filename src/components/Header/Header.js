import classes from "./Header.module.css";
import Button from "../Button/Button";
import logo from "./../../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Header() {
  const { authToken, updateAuthToken } = useContext(AuthContext);
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
