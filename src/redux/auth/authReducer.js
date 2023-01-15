import * as types from "./authTypes";

const initialState = { authToken: localStorage.getItem("token") || "" };

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };

    default:
      return state;
  }
}

export default authReducer;
