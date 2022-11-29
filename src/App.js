import React, { useState, useEffect } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/Footer/Footer";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    // getting API data
    async function getApiData() {
      try {
        const result = await fetch(
          "https://academy-video-api.herokuapp.com/content/free-items"
        );
        const apiData = await result.json();
        return apiData;
      } catch (error) {
        throw new Error(error);
      }
    }

    // setting default isFavorite to FALSE
    getApiData().then((moviesData) => {
      const updatedMovieList = moviesData.map((movie) => ({
        ...movie,
        isFavorite: false,
      }));
      setMoviesList(updatedMovieList);
    });
  }, []);

  function toggleFavorites(movieId) {
    setMoviesList((prevList) => {
      return prevList.map((movie) => {
        return movie.id === movieId
          ? { ...movie, isFavorite: !movie.isFavorite }
          : movie;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <HeroBanner />
        <div className="horizontalLine"></div>
        <div className="movieContainer">
          {moviesList.map((movie) => {
            return (
              <MovieCard
                {...movie}
                onSetFav={() => toggleFavorites(movie.id)}
                key={movie.id}
              />
            );
          })}
        </div>
        <div className="getMoreBtnDiv">
          <Button type="big">Get More Content</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
