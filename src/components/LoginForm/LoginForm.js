import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginForm.module.css";
import Button from "../Button/Button";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [canLogin, setCanLogin] = useState(true);

  const navigate = useNavigate();

  async function getAccessToken() {
    try {
      const response = await fetch(
        "https://dummy-video-api.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (!response.ok) {
        setCanLogin(false);
      }

      const resp = await response.json();
      return resp;
    } catch (error) {
      throw new Error("Error while fetching: ", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getAccessToken().then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        setCanLogin(true);
        navigate("/content", { replace: true });
      }
    });
    resetFormFields();
  }

  function resetFormFields() {
    setUsername("");
    setPassword("");
  }

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:{" "}
        <input
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        Password:{" "}
        <input
          id="password"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <Button size="big" type="submit">
        Sign In
      </Button>
      {!canLogin && <p>Failure: please check the login details.</p>}
    </form>
  );
}
