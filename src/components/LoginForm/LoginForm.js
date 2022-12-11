import { useState } from "react";

import classes from "./LoginForm.module.css";
import Button from "../Button/Button";

export default function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginStatus, setLoginStatus] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch(
      "https://dummy-video-api.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: { username },
          password: { password },
        }),
      }
    );

    console.log("username: ", username, "password: ", password);

    const responseData = await response.json();
    console.log(responseData);

    responseData.message === "Bad credentials!"
      ? setLoginStatus("bad")
      : setLoginStatus("good");

    console.log("login status: ", loginStatus);

    return responseData;
  }

  return (
    <form className={classes.formContainer}>
      <label>
        Username:{" "}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <label>
        Password:{" "}
        <input
          value={password}
          //   type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      {loginStatus === "bad" && (
        <p>"Failure: please check the login details."</p>
      )}
      <Button size="big" type="submit" onClick={handleLogin}>
        Sign In
      </Button>
    </form>
  );
}
