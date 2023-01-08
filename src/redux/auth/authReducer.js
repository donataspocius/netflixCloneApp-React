const initialState = { authToken: localStorage.getItem("token") || "" };

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "updateAuthToken":
      localStorage.setItem("authToken", action.authToken);
      return {
        ...state,
        authToken: action.authToken,
      };

    default:
      return state;
  }
}

export default authReducer;
