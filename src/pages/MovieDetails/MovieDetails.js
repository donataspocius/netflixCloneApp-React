import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import classes from "./MovieDetails.module.css";

export default function MovieDetails({ toggleFavorites, favorites }) {
  const [movieDetails, setMovieDetails] = useState({});
  const [modal, setModal] = useState(false);

  const isFavorite = favorites.includes(movieDetails.id);

  const params = useParams();
  const { id } = params;

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
      setMovieDetails(apiData);
    } catch (error) {
      throw new Error(error);
    }
  }, [id]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

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
            onClick={() => toggleFavorites(movieDetails.id)}
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
                frameborder="0"
                allowFullScreen
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
