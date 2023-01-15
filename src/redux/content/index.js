import * as types from "./contentTypes";
import * as constants from "./constants";
import * as actions from "./contentActions";
import contentReducer from "./contentReducer";
import * as selectors from "./contentSelectors";

const module = { types, selectors, constants, actions, contentReducer };

export default module;
