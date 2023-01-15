import content from "./../content";
import auth from "./../auth";
import { FAVORITES_STORAGE_KEY, AUTH_STORAGE_KEY } from "../../constants";

const localStorage =
  ({ getState }) =>
  (next) =>
  (action) => {
    next(action);

    let currentState = getState();

    switch (action.type) {
      case content.types.ADD_FAVORITE:
      case content.types.REMOVE_FAVORITE:
        const favorites = content.selectors.getFavorites(currentState);

        window.localStorage.setItem(
          FAVORITES_STORAGE_KEY,
          JSON.stringify(favorites)
        );
        break;
      case auth.types.UPDATE_AUTH_TOKEN:
        const authToken = auth.selectors.getAuthToken(currentState);
        window.localStorage.setItem(AUTH_STORAGE_KEY, authToken);
        break;
      default:
        break;
    }
  };

export default localStorage;
