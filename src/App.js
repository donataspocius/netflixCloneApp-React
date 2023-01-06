import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login.js";
import UserContent from "./pages/userContent";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import SubscribeLayout from "./pages/Subscribe/Subscribelayout";

export default function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  function updateAuthToken(token) {
    localStorage.setItem("token", token);
    setAuthToken(token);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout authToken={authToken} updateAuthToken={updateAuthToken}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<Login updateAuthToken={updateAuthToken} />}
            />
            <Route path="/content" element={<UserContent />} />
            <Route path="/content/:id" element={<MovieDetails />} />
            <Route path="/subscribe/*" element={<SubscribeLayout />} />
            <Route path="*" element={<p>You're LOST! Page not found.</p>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
