import { Fragment, useEffect, useState } from "react";

import classes from "./HomePage.module.css";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieCard from "../../components/MovieCard/MovieCard";
import Button from "../../components/Button/Button";

export default function HomePage({ toggleFavorites, favorites }) {
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

    getApiData().then((moviesData) => {
      setMoviesList(moviesData);
    });
  }, []);

  return (
    <Fragment>
      <HeroBanner />
      <div className={classes.horizontalLine}></div>
      <div className={classes.movieContainer}>
        {moviesList.map((movie) => {
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
      <div className={classes.getMoreBtnDiv}>
        <Button size="big">Get More Content</Button>
      </div>
    </Fragment>
  );
}
