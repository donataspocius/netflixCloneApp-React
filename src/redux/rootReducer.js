import { combineReducers } from "redux";
import contentReducer from "./content/contentReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  auth: authReducer,
});

export default rootReducer;
