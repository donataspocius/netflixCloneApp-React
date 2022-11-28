import classes from "./MovieCard.module.css";
import Button from "../Button/Button";

export default function MovieCard({
  title,
  image,
  description,
  id,
  isFavorite,
  onSetFav,
}) {
  //   function toggleFavorites(movieId) {
  //     setMoviesList((prevList) => {
  //       return prevList.map((movie) => {
  //         return movie.id === movieId
  //           ? { ...movie, isFavorite: !movie.isFavorite }
  //           : movie;
  //       });
  //     });
  //   }

  return (
    <div className={classes.MovieCard}>
      <img src={image} alt={`${title} cover`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        id={id}
        key={id}
        type="small"
        name="Favorite"
        isFavorite={isFavorite}
        onClick={onSetFav}
      />
    </div>
  );
}
