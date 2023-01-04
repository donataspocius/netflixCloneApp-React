const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  movies: [],
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
      if (Array.isArray(action.moviesApiData)) {
      }
      return {
        ...state,
        movies: action.moviesApiData,
      };
    }
    default:
      return state;
  }
}
