import classes from "./Header.module.css";
import Button from "../Button/Button";
import logo from "./../../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header({ authToken, updateAuthToken }) {
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

function mapStateToProps(state) {
  return {
    authToken: state.auth.authToken || "",
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateAuthToken: (authToken) => {
      dispatch({
        type: "updateAuthToken",
        authToken,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
