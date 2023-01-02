import React from "react-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import classes from "./UserInfo.module.css";
import { useNavigate } from "react-router-dom";

export default function UserInfo({ onChange }) {
  const navigate = useNavigate();
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
      <Button size="big" onClick={() => navigate("/subscribe/plan")}>
        Continue
      </Button>
    </form>
  );
}
