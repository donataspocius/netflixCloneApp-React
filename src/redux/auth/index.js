import * as types from "./authTypes";
import * as constants from "./constants";
import * as actions from "./authActions";
import * as selectors from "./authSelectors";
import authReducer from "./authReducer";

const module = { types, constants, actions, selectors, authReducer };

export default module;
