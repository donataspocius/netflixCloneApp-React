import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import classes from "./MovieDetails.module.css";

function MovieDetails({ toggleFavorites, favorites, movies, getMovies }) {
  const [modal, setModal] = useState(false);

  const isFavorite = favorites.includes(movies.id);

  const params = useParams();
  const { id } = params;

  // const findMovie = movies.filter((movie) => movie.id === id);

  // const movieDetails = findMovie[0];

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
      getMovies(apiData);
    } catch (error) {
      throw new Error(error);
    }
  }, [getMovies, id]);

  useEffect(() => {
    getApiData();
  }, [getApiData, movies]);

  function handleWatchTrailer() {
    setModal(!modal);
  }
  return (
    <div className={classes.movieDetailsContainer}>
      <img
        src={movies.image}
        width="316px"
        alt={`Movie "${movies.title}" cover`}
      />
      <div>
        <h3>{movies.title}</h3>
        <p>{movies.description}</p>
        <div className="btnContainer">
          <Button size="big" onClick={handleWatchTrailer}>
            Watch
          </Button>
          <Button
            size="big"
            isFavorite={isFavorite}
            onClick={() => toggleFavorites(movies.id, isFavorite)}
          >
            {isFavorite ? "Remove 💔" : "Favorite"}
          </Button>
        </div>
        {modal && (
          <button className={classes.backdrop} onClick={handleWatchTrailer}>
            <div className={classes.modal}>
              <iframe title={movies.title} src={movies.video} allowFullScreen />
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

// const getApiData = useCallback(async () => {
//   try {
//     const result = await fetch(
//       `https://dummy-video-api.onrender.com/content/items/${id}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: localStorage.getItem("token"),
//         },
//       }
//     );
//     const apiData = await result.json();
//     setMovieDetails(apiData);
//   } catch (error) {
//     throw new Error(error);
//   }
// }, [id]);

// useEffect(() => {
//   getApiData();
// }, [getApiData]);
