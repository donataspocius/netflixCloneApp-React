import { useState, useEffect } from "react";
import classes from "./MoviesContainer.module.css";
import MovieCard from "../MovieCard/MovieCard";

export default function MoviesContainer() {
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
    <div className={classes.movieContainer}>
      {moviesList.map((movie) => {
        return (
          <MovieCard {...movie} onSetFav={() => toggleFavorites(movie.id)} />
        );
      })}
    </div>
  );
}
