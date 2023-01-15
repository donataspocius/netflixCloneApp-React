import { Fragment, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./HomePage.module.css";
import content from "../../redux/content";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieCard from "../../components/MovieCard/MovieCard";
import Button from "../../components/Button/Button";
import { API } from "../../constants";

function HomePage({ favorites, toggleFavorites, movies, getMovies }) {
  const navigate = useNavigate();
  // getting API data
  const getApiData = useCallback(async () => {
    try {
      const result = await fetch(API.freeContent);
      const apiData = await result.json();
      getMovies(apiData);
    } catch (error) {
      throw new Error(error);
    }
  }, [getMovies]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <Fragment>
      <HeroBanner />
      <div className={classes.horizontalLine}></div>
      <div className={classes.movieContainer}>
        {movies &&
          movies.map((movie) => {
            return (
              <MovieCard
                {...movie}
                onSetFav={() =>
                  toggleFavorites(movie.id, favorites.includes(movie.id))
                }
                isFavorite={favorites.includes(movie.id)}
                key={movie.id}
              />
            );
          })}
      </div>
      <div className={classes.getMoreBtnDiv}>
        <Button size="big" onClick={() => navigate("/subscribe/user-info")}>
          Get More Content
        </Button>
      </div>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    favorites: content.selectors.getFavorites(state) || [],
    movies: content.selectors.getAllMovies(state) || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorites: (id, isFavorite) => {
      dispatch(content.actions.toggleFavorites(id, isFavorite));
    },
    getMovies: (moviesApiData) =>
      dispatch(content.actions.getMovies(moviesApiData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
