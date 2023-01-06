import { Fragment, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./HomePage.module.css";

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
    favorites: state.content.favorites || [],
    movies: state.content.movies || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorites: (id, isFavorite) => {
      if (isFavorite) {
        dispatch({ type: "REMOVE_FAVORITE", id });
      } else {
        dispatch({ type: "ADD_FAVORITE", id });
      }
    },
    getMovies: (moviesApiData) => {
      dispatch({ type: "GET_MOVIES", moviesApiData });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
