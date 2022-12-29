import React from "react";
import styles from "./Input.module.css"

function Input(props) {
  const isValid = props.input.isValid || !props.input.isTouched;

  return (
    <div className={`${props.className} ${!isValid && styles.invalid}`}>
      <label>{props.children}</label>
      <input
        type={props.type}
        value={props.input.value}
        onChange={props.input.onChange}
        onBlur={props.input.onBlur}
      />
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
