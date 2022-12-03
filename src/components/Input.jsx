import React from "react";

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      loanAmount: "",
      interestRate: "",
      val: "",
    };
  }

  handleVal = (e) => {
    if (this.props.htmlFor.match("loan-amount")) {
      this.setState({ loanAmount: e.target.value });
    } else if (this.props.htmlFor.match("interest-rate")) {
      this.setState({ interestRate: e.target.value });
    }
  };

  calculate = () => {
    const val = this.loanAmount - this.interestRate;
    this.setState({ val: val });
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
