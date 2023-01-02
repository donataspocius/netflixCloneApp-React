import React from "react-dom";
import classes from "./Payment.module.css";
import Input from "../../../components/Input/Input";

export default function Payment() {
  function onChange() {}
  return (
    <form className={classes.inputContainer}>
      <Input label={"First name"} name="fname" onChange={onChange} />
      <Input label={"Last Name"} name="lname" onChange={onChange} />
      <Input label={"Card Number"} name="cardNumber" onChange={onChange} />
      <Input label={"Expiry date MM/YY"} name="expDate" onChange={onChange} />
      <Input label={"CVV"} name="CVV" onChange={onChange} />
    </form>
  );
}
