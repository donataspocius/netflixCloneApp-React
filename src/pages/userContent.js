import { useCallback } from "react";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import content from "../redux/content";
import MovieCard from "../components/MovieCard/MovieCard";
import { API } from "../constants";
import classes from "./HomePage/HomePage.module.css";

function UserContent() {
  const [userMovies, setUserMovies] = useState([]);

  const dispatch = useDispatch();
  const favorites = useSelector(content.selectors.getFavorites);

  function toggleFavorites(id, isFavorite) {
    if (isFavorite) {
      dispatch({ type: content.types.REMOVE_FAVORITE, id });
    } else {
      dispatch({ type: content.types.ADD_FAVORITE, id });
    }
  }

  const getApiData = useCallback(async () => {
    try {
      const result = await fetch(API.userContent, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("authToken"),
        },
      });
      const apiData = await result.json();
      setUserMovies(apiData);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <main>
      <div className={classes.movieContainer}>
        {userMovies.map((movie) => {
          return (
            <MovieCard
              {...movie}
              onSetFav={() =>
                toggleFavorites(movie.id, favorites.includes(movie.id))
              }
              isFavorite={favorites.includes(movie.id)}
              key={movie.id}
            />
          );
        })}
      </div>
    </main>
  );
}

// function mapStateToProps(state) {
//   return {
//     favorites: state.content.favorites || [],
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     toggleFavorites: (id, isFavorite) => {
//       if (isFavorite) {
//         dispatch({ type: content.types.REMOVE_FAVORITE, id });
//       } else {
//         dispatch({ type: content.types.ADD_FAVORITE, id });
//       }
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserContent);

export default UserContent;
