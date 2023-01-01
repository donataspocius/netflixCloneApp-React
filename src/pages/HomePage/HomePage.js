import { Fragment, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./HomePage.module.css";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieCard from "../../components/MovieCard/MovieCard";
import Button from "../../components/Button/Button";
import { API } from "../../constants";

export default function HomePage({ toggleFavorites, favorites }) {
  const [moviesList, setMoviesList] = useState([]);

  const navigate = useNavigate();

  // getting API data
  const getApiData = useCallback(async () => {
    try {
      const result = await fetch(API.freeContent);
      const apiData = await result.json();
      setMoviesList(apiData);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

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
        <Button size="big" onClick={() => navigate("/subscribe")}>
          Get More Content
        </Button>
      </div>
    </Fragment>
  );
}
