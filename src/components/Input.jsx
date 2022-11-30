import React from "react";

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      loanValue: "",
    };
  }

  handleVal = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { divClass, labelClass, label, htmlFor, inputClass } = this.props;
    return (
      <div className={divClass}>
        <label className={labelClass} htmlFor={htmlFor}>
          {label}
        </label>
        <input onKeyUp={this.handleVal} className={inputClass} type="text" />
      </div>
    );
  }
}

export default Input;
