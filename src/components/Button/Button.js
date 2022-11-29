import classes from "./Button.module.css";

export default function Button({ id, children, onClick, type, isFavorite }) {
  return (
    <button
      id={id}
      className={`${classes.button} ${classes[`button--${type}`]} ${
        isFavorite ? classes["button--fav"] : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
