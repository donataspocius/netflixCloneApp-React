const API_DOMAIN = "https://dummy-video-api.onrender.com";

export const API = {
  login: `${API_DOMAIN}/auth/login`,
  freeContent: `${API_DOMAIN}/content/free-items`,
  userContent: `${API_DOMAIN}/content/items`,
  movieDetail: `${API_DOMAIN}/content/items/:id`,
};
