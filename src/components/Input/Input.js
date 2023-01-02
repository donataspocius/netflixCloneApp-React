import { Fragment, useId } from "react";

export default function Input({
  id,
  label,
  type = "text",
  onChange,
  name,
  value,
}) {
  let uniqueId = useId();
  return (
    <Fragment>
      <label htmlFor={id || uniqueId}>{label}</label>
      <input
        id={id || uniqueId}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      ></input>
    </Fragment>
  );
}
