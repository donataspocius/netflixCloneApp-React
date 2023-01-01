import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./SubscribeLayout.module.css";

export default function Subscribe({ children }) {
  return (
    <div>
      <nav>
        <NavLink className={classes.NavLink} to="user-info">
          Create User
        </NavLink>
        <NavLink className={classes.NavLink} to="plan">
          Pick a Plan
        </NavLink>
        <NavLink className={classes.NavLink} to="payment">
          Payment
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
