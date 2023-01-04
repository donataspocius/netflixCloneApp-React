import { combineReducers } from "redux";
import contentReducer from "./content/contentReducer";

const rootReducer = combineReducers({
  content: contentReducer,
});

export default rootReducer;
