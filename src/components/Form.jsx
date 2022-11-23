import React from "react";
import "../styles/Form.css";

class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="FormSection">
        <form className="Form">
          <div className="Input__Container">
            <label className="Form__Label" htmlFor="loan-amount">
              Loan amount
            </label>
            <input className="" type="text" />
          </div>

          <div className="Input__Container">
            <label htmlFor="loan-term-years">Loan term in years</label>
            <input type="text" />
          </div>

          <div>Or</div>

          <div className="Input__Container">
            <label htmlFor="loan-term-months">Loan term in months</label>
            <input type="text" />
          </div>

          <div className="Input__Container">
            <label htmlFor="intrest-rate">Interest rate per year</label>
            <input type="text" />
          </div>

          <button>Calculate</button>
        </form>
      </section>
    );
  }
}

export default Form;
