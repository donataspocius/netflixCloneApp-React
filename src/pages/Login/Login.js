import { Fragment } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./Login.module.css";

export default function Login() {
  function onChange() {}
  function handleSubmit() {}
  return (
    <Fragment className={classes.formContainer}>
      <form onSubmit={handleSubmit} className={classes.formLayout}>
        <Input label={"Username"} onChange={onChange} />
        <Input label={"Password"} type={"password"} onChange={onChange} />
        <Button size={"big"} type="submit">
          Sign In
        </Button>
      </form>
    </Fragment>
  );
}

// <main className="background">
