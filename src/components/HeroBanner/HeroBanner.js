import classes from "./HeroBanner.module.css";
import Button from "../Button/Button";

export default function HeroBanner() {
  return (
    <div className={classes.HeroBanner}>
      <h1>Wanna more Content?</h1>
      <Button type="big" name="Get Access" />
    </div>
  );
}
