import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import classes from "./MovieDetails.module.css";
import content from "../../redux/content";

function MovieDetails() {
  const params = useParams();
  const { id } = params;
  let movie = null;
  const dispatch = useDispatch();
  const favorites = useSelector(content.selectors.getFavorites);
  const movies = useSelector(content.selectors.getAllMovies);
  const modal = useSelector(content.selectors.getModalState);

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
            authorization: localStorage.getItem("authToken"),
          },
        }
      );
      const apiData = await result.json();
      dispatch(content.actions.getMovies([apiData]));
    } catch (error) {
      throw new Error(error);
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (!movie) getApiData();
  }, [getApiData, movie]);

  function handleWatchTrailer() {
    return dispatch(content.actions.toggleModal());
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
              isFavorite={favorites.includes(movie.id)}
              onClick={() => {
                console.log(
                  "favorites.includes(movie.id)",
                  favorites.includes(movie.id)
                );
                dispatch(
                  content.actions.toggleFavorites(
                    movie.id,
                    favorites.includes(movie.id)
                  )
                );
              }}
            >
              {favorites.includes(movie.id) ? "Remove 💔" : "Favorite"}
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

export default MovieDetails;
