import React from "react";
import Input from "./Input";
import FontAwesomeIcon from "./FontAwesomeIcon";
import "../styles/MakeAPayment.css";
import "../styles/Btn.css";

class MakeAPayment extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="makeAPaymentSection">
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
            label="Interest rate"
            labelClass="form__label"
            htmlFor="intrest-rate"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <FontAwesomeIcon icon="fas fa-percent" />
          <button className="btn btn--small calculate">Calculate</button>
        </form>

        <div className="makePayment">
          <Input
            label="Enter your payment amount"
            htmlFor="enter payment"
            divClass="flex inputContainer"
            labelClass="form__label"
            inputClass="form__input"
          />
          <FontAwesomeIcon icon="fas fa-dollar-sign fa-dollar-sign--makeAPayment" />
          <button className="btn btn--large makeAPayment">
            Make a payment
          </button>
        </div>
      </section>
    );
  }
}

export default MakeAPayment;
