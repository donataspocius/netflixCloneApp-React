export const getAllMovies = (state) => {
  return state.content.movies;
};

export const getFavorites = (state) => {
  return state.content.favorites;
};

export const getModalState = (state) => {
  return state.content.modal;
};
