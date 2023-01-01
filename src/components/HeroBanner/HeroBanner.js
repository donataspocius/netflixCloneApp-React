import classes from "./HeroBanner.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();
  return (
    <div className={classes.heroBanner}>
      <div className={classes.heroBannerContent}>
        <h1>Wanna more Content?</h1>
        <Button size="big" onClick={() => navigate("/subscribe")}>
          Get Access
        </Button>
      </div>
    </div>
  );
}
