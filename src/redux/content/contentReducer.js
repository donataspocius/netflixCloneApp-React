import * as TYPES from "./contentTypes";
import { FAVORITES_STORAGE_KEY } from "../../constants";

const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || [],
  movies: [],
  modal: false,
  loading: false,
  error: false,
};

export default function contentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.id),
      };
    }
    case TYPES.ADD_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.concat(action.id),
      };
    }
    case TYPES.GET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
      };
    }

    case TYPES.TOGGLE_MODAL: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    default:
      return state;
  }
}
