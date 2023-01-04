const initialState = localStorage.getItem("token") || "";

function authReducer(state = { initialState }, action) {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
  }
}

export default authReducer;
