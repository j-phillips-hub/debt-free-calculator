import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";

function Input(props) {
  const { label, htmlFor, name, handleInput, icon } = props;
  return (
    <div className="flex inputContainer">
      <label className="form__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        onKeyUp={handleInput}
        name={name}
        className="form__input"
        type="number"
        autoComplete="off"
        required
      />
      <FontAwesomeIcon icon={`fas ${icon}`} />
    </div>
  );
}

export default Input;
