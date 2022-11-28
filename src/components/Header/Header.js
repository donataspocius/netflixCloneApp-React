import classes from "./Header.module.css";
import Button from "../Button/Button";
import logo from "./../../imgs/logo.png";

export default function Header() {
  return (
    <div className={classes.header}>
      <img className="logo" src={logo} alt="logo" />
      <Button type="big" name="Sign In" />
    </div>
  );
}
