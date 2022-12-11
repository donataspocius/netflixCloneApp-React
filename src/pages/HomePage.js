import { Fragment, useEffect, useState } from "react";

import HeroBanner from "../components/HeroBanner/HeroBanner";
import MovieCard from "../components/MovieCard/MovieCard";
import Button from "../components/Button/Button";

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    // getting API data
    async function getApiData() {
      try {
        const result = await fetch(
          "https://dummy-video-api.onrender.com/content/free-items"
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
        <Button size="big">Get More Content</Button>
      </div>
    </main>
  );
}
