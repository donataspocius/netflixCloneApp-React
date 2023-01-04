import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import classes from "./MovieDetails.module.css";

function MovieDetails({ toggleFavorites, favorites, movies, getMovies }) {
  const [modal, setModal] = useState(false);

  const isFavorite = favorites.includes(movies.id);

  const params = useParams();
  const { id } = params;
  console.log("movies", movies);
  const findMovie = movies.filter((movie) => movie.id === id);
  const movieDetails = findMovie[0];

  function handleWatchTrailer() {
    setModal(!modal);
  }
  return (
    <div className={classes.movieDetailsContainer}>
      <img
        src={movieDetails.image}
        width="316px"
        alt={`Movie "${movieDetails.title}" cover`}
      />
      <div>
        <h3>{movieDetails.title}</h3>
        <p>{movieDetails.description}</p>
        <div className="btnContainer">
          <Button size="big" onClick={handleWatchTrailer}>
            Watch
          </Button>
          <Button
            size="big"
            isFavorite={isFavorite}
            onClick={() => toggleFavorites(movieDetails.id, isFavorite)}
          >
            {isFavorite ? "Remove 💔" : "Favorite"}
          </Button>
        </div>
        {modal && (
          <button className={classes.backdrop} onClick={handleWatchTrailer}>
            <div className={classes.modal}>
              <iframe
                title={movieDetails.title}
                src={movieDetails.video}
                allowFullScreen
              />
            </div>
          </button>
        )}
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
