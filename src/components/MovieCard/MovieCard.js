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
  return (
    <div className={classes.movieCard}>
      <div className={classes.imgContainer}>
        <img src={image} alt={`${title} cover`} />
      </div>
      <div className={classes.contentContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button
          id={id}
          type="small"
          name="Favorite"
          isFavorite={isFavorite}
          onClick={onSetFav}
        />
      </div>
    </div>
  );
}
