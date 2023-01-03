import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import classes from "./SubscribeLayout.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Plan from "./Plan/Plan";
import Payment from "./Payment/Payment";

export default function Subscribe() {
  const [userInfo, setUserInfo] = useState({});

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function onClick(e) {
    e.preventDefault();
    console.log("submitting infoo", userInfo);
  }

  console.log("user info", userInfo);

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
