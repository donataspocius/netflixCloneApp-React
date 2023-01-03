import { useCallback } from "react";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard/MovieCard";
import { API } from "../constants";
import classes from "./HomePage/HomePage.module.css";

export default function UserContent({ favorites, toggleFavorites }) {
  const [userMovies, setUserMovies] = useState([]);

  const getApiData = useCallback(async () => {
    try {
      const result = await fetch(API.userContent, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      const apiData = await result.json();
      setUserMovies(apiData);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <main>
      <div className={classes.movieContainer}>
        {userMovies.map((movie) => {
          return (
            <MovieCard
              {...movie}
              onSetFav={() => toggleFavorites(movie.id)}
              isFavorite={favorites.includes(movie.id)}
              key={movie.id}
            />
          );
        })}
      </div>
    </main>
  );
}

// just a test
