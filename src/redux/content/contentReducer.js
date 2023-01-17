import * as TYPES from "./contentTypes";
import { FAVORITES_STORAGE_KEY } from "../../constants";
import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || [],
  movies: [],
  modal: false,
  loading: false,
  error: false,
};

const contentReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(TYPES.REMOVE_FAVORITE, (state, action) => {
    state.favorites = state.favorites.filter((id) => id !== action.id);
  });
  builder.addCase(TYPES.ADD_FAVORITE, (state, action) => {
    state.favorites = state.favorites.concat(action.id);
  });
  builder.addCase(TYPES.GET_MOVIES, (state, action) => {
    state.movies = action.payload;
  });
  builder.addCase(TYPES.TOGGLE_MODAL, (state, action) => {
    state.modal = !state.modal;
  });
});

// export default function contentReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case TYPES.REMOVE_FAVORITE: {
//       return {
//         ...state,
//         favorites: state.favorites.filter((id) => id !== action.id),
//       };
//     }
//     case TYPES.ADD_FAVORITE: {
//       return {
//         ...state,
//         favorites: state.favorites.concat(action.id),
//       };
//     }
//     case TYPES.GET_MOVIES: {
//       return {
//         ...state,
//         movies: action.payload,
//       };
//     }

//     case TYPES.TOGGLE_MODAL: {
//       return {
//         ...state,
//         modal: !state.modal,
//       };
//     }
//     default:
//       return state;
//   }
// }

export default contentReducer;
