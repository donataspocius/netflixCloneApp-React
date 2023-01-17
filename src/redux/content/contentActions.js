import { useDispatch } from "react-redux";
import { API } from "./../../constants";
import {
  GET_MOVIES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_MODAL,
} from "./contentTypes";

export const getMovies = (moviesApiData) => {
  return { type: GET_MOVIES, payload: moviesApiData };
};

export const toggleFavorites = (id, isFavorite) => {
  if (isFavorite) {
    return { type: REMOVE_FAVORITE, id };
  } else {
    return { type: ADD_FAVORITE, id };
  }
};

export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
};

export const getApiData =
  (movieType = "free", movieId) =>
  async () => {
    const fetchEndpoints = {
      free: API.freeContent,
      all: API.userContent,
      single: API.movieDetail(movieId),
    }[movieType];
    // dispatch fetch start / loading true, error: false;
    try {
      const result = await fetch(fetchEndpoints);
      const apiData = await result.json();
      // dispatch success / loading: false, error: false;
    } catch (error) {
      // set error
      // dispatch error loading: false, error: true;
    }
  };

// const getApiData = useCallback(async () => {
//   try {
//     const result = await fetch(API.freeContent);
//     const apiData = await result.json();
//     dispatch(content.actions.getMovies(apiData));
//   } catch (error) {
//     throw new Error(error);
//   }
// }, [dispatch]);
