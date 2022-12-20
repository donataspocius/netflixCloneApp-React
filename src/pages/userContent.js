import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard/MovieCard";
import classes from "./HomePage/HomePage.module.css";

export default function UserContent({ favorites, toggleFavorites }) {
  const [userMovies, setUserMovies] = useState([]);

  useEffect(() => {
    // getting API data
    async function getApiData() {
      try {
        const result = await fetch(
          "https://dummy-video-api.onrender.com/content/items",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
          }
        );
        const apiData = await result.json();
        return apiData;
      } catch (error) {
        throw new Error(error);
      }
    }

    getApiData().then((moviesData) => {
      setUserMovies(moviesData);
    });
  }, []);

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
