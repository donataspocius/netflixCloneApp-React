import { UPDATE_AUTH_TOKEN } from "./authTypes";

export const updateAuthToken = (token) => {
  return { type: UPDATE_AUTH_TOKEN, payload: token };
};
