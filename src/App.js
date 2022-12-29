import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login.js";
import UserContent from "./pages/userContent";

export default function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  function updateAuthToken(token) {
    localStorage.setItem("token", token);
    setAuthToken(token);
  }

  function toggleFavorites(movieId) {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        return (prevFavorites = prevFavorites.filter((id) => id !== movieId));
      } else {
        return (prevFavorites = prevFavorites.concat(movieId));
      }
    });

    // ---> ALTERNATIVE
    // let updateFavorites = [...favorites];
    // if (favorites.includes(movieId)) {
    //   updateFavorites = updateFavorites.filter((id) => id !== movieId);
    // } else {
    //   updateFavorites = updateFavorites.concat(movieId);
    // }
    // localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    // setFavorites(updateFavorites);
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BrowserRouter>
      <Layout authToken={authToken} updateAuthToken={updateAuthToken}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                favorites={favorites}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route
            path="/login"
            element={<Login updateAuthToken={updateAuthToken} />}
          />
          <Route
            path="/content"
            element={
              <UserContent
                favorites={favorites}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route path="*" element={<p>You're LOST! Page not found.</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
