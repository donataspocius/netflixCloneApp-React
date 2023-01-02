import React from "react-dom";
import classes from "./Plan.module.css";
import Input from "../../../components/Input/Input";
// import UserInfo from "../UserInfo/UserInfo";

export default function Plan() {
  function onChange() {}
  return (
    <form className={classes.inputContainer}>
      <Input
        type="checkbox"
        // checked={}
        label={"Username"}
        name="username"
        onChange={onChange}
      />
      <Input
        type="checkbox"
        label={"Password"}
        name="password"
        onChange={onChange}
      />
      <Input
        type="checkbox"
        label={"Repeat Password"}
        name="repeatPassword"
        onChange={onChange}
      />
    </form>
  );
}
