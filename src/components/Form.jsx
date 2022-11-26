import React from "react";
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
          <div className="flex inputContainer">
            <label className="form__label" htmlFor="loan-amount">
              Loan amount
            </label>
            <input className="form__input" type="text" />
          </div>

          <div className="flex inputContainer">
            <label className="form__label" htmlFor="loan-term-years">
              Loan term in years
            </label>
            <input className="form__input" type="text" />
          </div>

          <div className="seperator">Or</div>

          <div className="flex inputContainer">
            <label className="form__label" htmlFor="loan-term-months">
              Loan term in months
            </label>
            <input className="form__input" type="text" />
          </div>

          <div className="flex intrestRate">
            <div className="flex inputContainer">
              <label className="form__label" htmlFor="intrest-rate">
                Interest rate per year
              </label>
              <input className="form__input" type="text" />
            </div>

            <button className="btn btn--small calculate">Calculate</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;
