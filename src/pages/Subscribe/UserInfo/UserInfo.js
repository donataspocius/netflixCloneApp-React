import { useState } from "react";
import React from "react-dom";
import Input from "../../../components/Input/Input";
import classes from "./UserInfo.module.css";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState({});

  function onChange(e) {
    setUserInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <form className={classes.inputContainer}>
      <Input label={"Username"} name="username" onChange={onChange} />
      <Input
        label={"Password"}
        name="password"
        type={"password"}
        onChange={onChange}
      />
      <Input
        label={"Repeat Password"}
        name="repeatPassword"
        type={"password"}
        onChange={onChange}
      />
    </form>
  );
}
