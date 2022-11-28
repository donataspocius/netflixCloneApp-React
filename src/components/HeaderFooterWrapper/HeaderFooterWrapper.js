import { Children } from "react";
import classes from "./HeaderFooterWrapper.module.css";

export default function HeaderFooterWrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}
