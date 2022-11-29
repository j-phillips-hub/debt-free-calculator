import React from "react";
import Input from "./Input";
import FontAwesomeIcon from "./FontAwesomeIcon";
import "../styles/Form.css";
import "../styles/Btn.css";

class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="formSection">
        <form className="form">
          <Input
            label="Loan amount"
            labelClass="form__label"
            htmlFor="loan-amount"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <FontAwesomeIcon icon="fas fa-dollar-sign" />
          <Input
            label="Loan term in years"
            labelClass="form__label"
            htmlFor="loan-term-years"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <div className="seperator">Or</div>
          <Input
            label="Loan term in months"
            labelClass="form__label"
            htmlFor="loan-term-months"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <Input
            label="Interest rate per year"
            labelClass="form__label"
            htmlFor="intrest-rate"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <FontAwesomeIcon icon="fas fa-percent" />
          <button className="btn btn--small calculate">Calculate</button>
        </form>
      </section>
    );
  }
}

export default Form;
