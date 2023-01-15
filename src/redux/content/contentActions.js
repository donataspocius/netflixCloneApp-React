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
