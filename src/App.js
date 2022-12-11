import { createBrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <p>About is here</p>,
  // },
]);
