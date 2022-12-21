import { Fragment, useId } from "react";

export default function Input({ id, label, type = "text", onChange }) {
  let uniqueId = useId();
  return (
    <Fragment>
      <label htmlFor={id || uniqueId}>{label}</label>
      <input id={id || uniqueId} type={type} onChange={onChange}></input>
    </Fragment>
  );
}
