const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  movies: [],
  modal: false,
};

export default function contentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REMOVE_FAVORITE": {
      const newFavoriteArray = state.favorites.filter((id) => id !== action.id);
      localStorage.setItem("favorites", JSON.stringify(newFavoriteArray));
      return {
        ...state,
        favorites: newFavoriteArray,
      };
    }
    case "ADD_FAVORITE": {
      const newFavoriteArray = state.favorites.concat(action.id);
      localStorage.setItem("favorites", JSON.stringify(newFavoriteArray));

      return {
        ...state,
        favorites: newFavoriteArray,
      };
    }
    case "GET_MOVIES": {
      return {
        ...state,
        movies: action.moviesApiData,
      };
    }

    case "TOGGLE_MODAL": {
      console.log("TOGGLE_MODAL -->", state.modal);
      return {
        ...state,
        modal: !state.modal,
      };
    }
    default:
      return state;
  }
}
