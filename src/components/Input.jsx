import React from "react";

function Input(props) {
  const { label, htmlFor, name, handleInput, placeholder } = props;
  return (
    <div className="flex inputContainer">
      <label className="form__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        onKeyUp={handleInput}
        name={name}
        className="form__input"
        type="number"
        autoComplete="off"
        required
      />
    </div>
  );
}

export default Input;
