import React from "react";
import "../styles/Form.css";
import "../styles/Btn.css";

class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="FormSection">
        <form className="Form">
          <div className="Flex InputContainer">
            <label className="Form__Label" htmlFor="loan-amount">
              Loan amount
            </label>
            <input className="Form__Input" type="text" />
          </div>

          <div className="Flex InputContainer">
            <label className="Form__Label" htmlFor="loan-term-years">
              Loan term in years
            </label>
            <input className="Form__Input" type="text" />
          </div>

          <div className="Seperator">Or</div>

          <div className="Flex InputContainer">
            <label className="Form__Label" htmlFor="loan-term-months">
              Loan term in months
            </label>
            <input className="Form__Input" type="text" />
          </div>

          <div className="Flex IntrestRate">
            <div className="Flex InputContainer">
              <label className="Form__Label" htmlFor="intrest-rate">
                Interest rate per year
              </label>
              <input className="Form__Input" type="text" />
            </div>

            <button className="Btn Btn--Small Calculate">Calculate</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;
