export const FAVORITES_STORAGE_KEY = "favorites";
export const AUTH_STORAGE_KEY = "authToken";

const API_DOMAIN = "https://dummy-video-api.onrender.com";

export const API = {
  login: `${API_DOMAIN}/auth/login`,
  freeContent: `${API_DOMAIN}/content/free-items`,
  userContent: `${API_DOMAIN}/content/items`,
  movieDetail: (id) => `${API_DOMAIN}/content/items/${id}`,
  plans: `${API_DOMAIN}/sales/plans`,
  signup: `${API_DOMAIN}/auth/signup`,
};
