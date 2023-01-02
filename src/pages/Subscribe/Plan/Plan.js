import React from "react-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Plan.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

export default function Plan({ onChange }) {
  const navigate = useNavigate();

  return (
    <form className={classes.inputContainer}>
      <Input
        type="radio"
        label={"Plan A"}
        name="plan"
        onChange={onChange}
        id="isChecked"
        value="Plan A"
      />
      <Input
        type="radio"
        label={"Plan B"}
        name="plan"
        onChange={onChange}
        id="isChecked"
        value="Plan B"
      />
      <Input
        type="radio"
        label={"Plan C"}
        name="plan"
        onChange={onChange}
        id="isChecked"
        value="Plan C"
      />
      <Button size="big" onClick={() => navigate("/subscribe/payment")}>
        Continue
      </Button>
    </form>
  );
}
