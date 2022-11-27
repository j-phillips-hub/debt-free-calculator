import React from "react";
import Input from "./Input";
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
            for="loan-amount"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <Input
            label="Loan term in years"
            labelClass="form__label"
            for="loan-term-years"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <div className="seperator">Or</div>
          <Input
            label="Loan term in months"
            labelClass="form__label"
            for="loan-term-months"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <Input
            label="Interest rate per year"
            labelClass="form__label"
            for="intrest-rate"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <button className="btn btn--small calculate">Calculate</button>
        </form>
      </section>
    );
  }
}

export default Form;
