import React from "react";

function Input(props) {
  const { label, htmlFor } = props;
  return (
    <div className="flex inputContainer">
      <label className="form__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        onKeyUp={props.handleInput}
        className="form__input"
        type="number"
        name={props.name}
        autoComplete="off"
        required
      />
    </div>
  );
}

export default Input;
