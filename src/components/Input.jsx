import React from "react";

class Input extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { divClass, labelClass, label, htmlFor, inputClass } = this.props;
    return (
      <div className={divClass}>
        <label className={labelClass} htmlFor={htmlFor}>
          {label}
        </label>
        <input className={inputClass} type="text" />
      </div>
    );
  }
}

export default Input;
