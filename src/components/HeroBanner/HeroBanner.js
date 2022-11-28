import classes from "./HeroBanner.module.css";
import Button from "../Button/Button";
import heroImg from "./../../imgs/heroImg.png";

export default function HeroBanner() {
  return (
    <div className={classes.HeroBanner}>
      <img src={heroImg} alt="hero banner movie compilation" />
      <h1>Wanna more Content?</h1>
      <Button type="big" name="Get Access" />
    </div>
  );
}
