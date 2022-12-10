import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "reset-css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
