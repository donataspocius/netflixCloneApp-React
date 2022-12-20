import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login.js";
import UserContent from "./pages/userContent";

export default function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  function toggleFavorites(movieId) {
    let updateFavorites = [...favorites];
    if (favorites.includes(movieId)) {
      updateFavorites = updateFavorites.filter((id) => id !== movieId);
    } else {
      updateFavorites = updateFavorites.concat(movieId);
    }
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);

    //   setFavorites((prevFavorites) => {
    //     if (prevFavorites.includes(movieId)) {
    //       prevFavorites = prevFavorites.filter((id) => id !== movieId);
    //     } else {
    //       prevFavorites = prevFavorites.concat(movieId);
    //     }
    //   });
    //   localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return (
    <BrowserRouter>
      <Layout>
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
          <Route path="/login" element={<Login />} />
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
