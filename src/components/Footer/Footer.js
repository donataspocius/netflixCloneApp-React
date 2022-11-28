import classes from "./Footer.module.css";
import creditCardsImg from "./../../imgs/creditCards.png";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <p>We care about your entertainment. Copyright © 2019-2021 felix.com</p>
      <img src={creditCardsImg} alt="credit card logos" />
    </div>
  );
}
