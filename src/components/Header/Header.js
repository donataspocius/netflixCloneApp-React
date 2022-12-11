import classes from "./Header.module.css";
import Button from "../Button/Button";
import logo from "./../../imgs/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={classes.header}>
      <img className="logo" src={logo} alt="logo" />
      <NavLink to="/login">
        <Button size="big">Sign in</Button>
      </NavLink>
    </div>
  );
}
