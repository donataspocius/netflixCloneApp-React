import classes from "./HeroBanner.module.css";
import Button from "../Button/Button";

export default function HeroBanner() {
  return (
    <div className={classes.heroBanner}>
      <div className={classes.heroBannerContent}>
        <h1>Wanna more Content?</h1>
        <Button size="big">Get Access</Button>
      </div>
    </div>
  );
}
