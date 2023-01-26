import { API } from "./../../constants";
import auth from "./../auth";
import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_MODAL,
} from "./contentTypes";

// export const getMovies = (moviesApiData) => {
//   return { type: GET_MOVIES, payload: moviesApiData };
// };

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

export const getMovies =
  (movieType = "free", movieId) =>
  async (dispatch, getState) => {
    const fetchEndpoints = {
      free: API.freeContent,
      all: API.userContent,
      single: API.movieDetail(movieId),
    }[movieType];

    dispatch({ type: GET_MOVIES });

    // dispatch fetch start / loading true, error: false;
    try {
      const result = await fetch(fetchEndpoints, {
        headers: {
          authorization: auth.selectors.getAuthToken(getState()),
        },
      });
      const apiData = await result.json();
      // dispatch success / loading: false, error: false;
      dispatch({ type: GET_MOVIES_SUCCESS, payload: apiData });
    } catch (error) {
      dispatch({ type: GET_MOVIES_FAILURE });
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
