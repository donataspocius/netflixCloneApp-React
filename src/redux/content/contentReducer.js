const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export default function contentReducer(state = INITIAL_STATE, action) {
  console.log("content reducer");
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
    default:
      return state;
  }
}
