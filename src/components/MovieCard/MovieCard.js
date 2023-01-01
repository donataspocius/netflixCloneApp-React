import classes from "./MovieCard.module.css";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink to={`/content/${id}`}>
          <img src={image} alt={`${title} cover`} />
        </NavLink>
      </div>
      <div className={classes.contentContainer}>
        <NavLink
          to={`/content/${id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </NavLink>
        <Button id={id} size="small" onClick={onSetFav} isFavorite={isFavorite}>
          {isFavorite ? "Remove 💔" : "Favorite"}
        </Button>
      </div>
    </div>
  );
}
