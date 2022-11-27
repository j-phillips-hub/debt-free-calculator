import React from "react";

class Input extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={this.props.divClass}>
        <label className={this.props.labelClass} htmlFor={this.props.for}>
          {this.props.label}
        </label>
        <input className={this.props.inputClass} type="text" />
      </div>
    );
  }
}

export default Input;
