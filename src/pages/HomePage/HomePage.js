import { Fragment, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./HomePage.module.css";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieCard from "../../components/MovieCard/MovieCard";
import Button from "../../components/Button/Button";
import { API } from "../../constants";

function HomePage({ toggleFavorites, favorites }) {
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
