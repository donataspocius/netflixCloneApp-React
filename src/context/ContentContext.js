import { createContext, useState, useEffect } from "react";
import { FAVORITES_STORAGE_KEY } from "../constants";

const ContentContext = createContext({
  favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || [],
  movies: [],
  modal: false,
  loading: false,
  error: false,
});

const ContentProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  function toggleFavorites(movieId) {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        return (prevFavorites = prevFavorites.filter((id) => id !== movieId));
      } else {
        return (prevFavorites = prevFavorites.concat(movieId));
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <ContentContext.Provider value={{ toggleFavorites, favorites }}>
      {children}
    </ContentContext.Provider>
  );
};

export { ContentProvider };
export default ContentContext;
