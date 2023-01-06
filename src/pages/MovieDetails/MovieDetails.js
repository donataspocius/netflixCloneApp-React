import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import classes from "./MovieDetails.module.css";

function MovieDetails({
  toggleFavorites,
  favorites,
  movies,
  getMovies,
  modal,
  toggleModal,
}) {
  const isFavorite = favorites.includes(movies.id);

  const params = useParams();
  const { id } = params;
  let movie = null;

  if (movies.length !== 0) {
    movie = movies.filter((movie) => movie.id === id)[0];
  }

  const getApiData = useCallback(async () => {
    try {
      const result = await fetch(
        `https://dummy-video-api.onrender.com/content/items/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const apiData = await result.json();
      getMovies([apiData]);
    } catch (error) {
      throw new Error(error);
    }
  }, [getMovies, id]);

  useEffect(() => {
    if (!movie) getApiData();
  }, [getApiData, movie]);

  function handleWatchTrailer() {
    return toggleModal();
  }
  return (
    movie && (
      <div className={classes.movieDetailsContainer}>
        <img
          src={movie.image}
          width="316px"
          alt={`Movie "${movie.title}" cover`}
        />
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <div className="btnContainer">
            <Button size="big" onClick={handleWatchTrailer}>
              Watch
            </Button>
            <Button
              size="big"
              isFavorite={isFavorite}
              onClick={() => toggleFavorites(movie.id, isFavorite)}
            >
              {isFavorite ? "Remove 💔" : "Favorite"}
            </Button>
          </div>
          {modal && (
            <div className={classes.backdrop} onClick={handleWatchTrailer}>
              <div className={classes.modal}>
                <iframe title={movie.title} src={movie.video} allowFullScreen />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.content.favorites || [],
    movies: state.content.movies || [],
    modal: state.content.modal || false,
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
    toggleModal: () => {
      dispatch({ type: "TOGGLE_MODAL" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
