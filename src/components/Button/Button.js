import classes from "./Button.module.css";

export default function Button({
  id,
  children,
  onClick,
  size,
  isFavorite,
  type = "button",
}) {
  return (
    <button
      id={id}
      className={`${classes.button} ${classes[`button--${size}`]} ${
        isFavorite ? classes["button--fav"] : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

// comment
