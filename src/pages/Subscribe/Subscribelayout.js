import React, { useState, useCallback, useEffect } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./SubscribeLayout.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Plan from "./Plan/Plan";
import Payment from "./Payment/Payment";
import { API } from "../../constants";

function Subscribe({ updateAuthToken }) {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const getAccessToken = useCallback(async () => {
    try {
      const result = await fetch(API.signup, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
          planId: userInfo.plan,
        }),
      });
      const apiData = await result.json();
    } catch (error) {
      throw new Error(error);
    }
  }, [userInfo]);

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  function onClick(e) {
    e.preventDefault();
    getAccessToken().then((data) => {
      if (data.token) {
        updateAuthToken(data.token);
        navigate("/content", { replace: true });
      } else {
        console.log("no token found", data);
      }
    });
  }

  return (
    <div className={classes.formContainer}>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeNavLink : classes.NavLink
          }
          to="user-info"
        >
          Create User
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeNavLink : classes.NavLink
          }
          to="plan"
        >
          Pick a Plan
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeNavLink : classes.NavLink
          }
          to="payment"
        >
          Payment
        </NavLink>
      </nav>
      <div className={classes.formOutlet}>
        <Routes>
          <Route path="user-info" element={<UserInfo onChange={onChange} />} />
          <Route path="plan" element={<Plan onChange={onChange} />} />
          <Route
            path="payment"
            element={<Payment onChange={onChange} onClick={onClick} />}
          />
        </Routes>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
