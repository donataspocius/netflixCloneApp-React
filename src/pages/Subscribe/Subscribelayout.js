import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import classes from "./SubscribeLayout.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Plan from "./Plan/Plan";
import Payment from "./Payment/Payment";

export default function Subscribe({ children }) {
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
          <Route path="user-info" element={<UserInfo />} />
          <Route path="plan" element={<Plan />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
}
