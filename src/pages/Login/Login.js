import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./Login.module.css";
import { API } from "../../constants";
import { connect } from "react-redux";
import auth from "../../redux/auth";

function Login({ updateAuthToken }) {
  const [userData, setUserData] = useState({});
  const [canLogin, setCanLogin] = useState(true);

  const navigate = useNavigate();

  function onChange(e) {
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function getAccessToken() {
    try {
      const response = await fetch(API.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
        }),
      });

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
        updateAuthToken(data.token);
        setCanLogin(true);
        navigate("/content", { replace: true });
      }
    });
    e.target.reset();
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className={classes.formLayout}>
        <Input label={"Username"} name="username" onChange={onChange} />
        <Input
          label={"Password"}
          name="password"
          type={"password"}
          onChange={onChange}
        />
        <Button size={"big"} type="submit">
          Sign In
        </Button>
        {!canLogin && <p>Failure: please check the login details.</p>}
      </form>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    authToken: auth.selectors.getAuthToken(state) || "",
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateAuthToken: (authToken) => {
      dispatch(auth.actions.updateAuthToken(authToken));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
