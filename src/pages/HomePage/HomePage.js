import { Fragment, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./HomePage.module.css";
import content from "../../redux/content";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieCard from "../../components/MovieCard/MovieCard";
import Button from "../../components/Button/Button";
import { API } from "../../constants";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(content.selectors.getFavorites);
  const movies = useSelector(content.selectors.getAllMovies);

  // getting API data
  const getApiData = useCallback(async () => {
    try {
      const result = await fetch(API.freeContent);
      const apiData = await result.json();
      dispatch(content.actions.getMovies(apiData));
    } catch (error) {
      throw new Error(error);
    }
  }, [dispatch]);

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
                  // toggleFavorites(movie.id, )
                  dispatch(
                    content.actions.toggleFavorites(
                      movie.id,
                      favorites.includes(movie.id)
                    )
                  )
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

export default HomePage;
