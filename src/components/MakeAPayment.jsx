import React from "react";
import Input from "./Input";
import FontAwesomeIcon from "./FontAwesomeIcon";
import "../styles/MakeAPayment.css";
import "../styles/Btn.css";
import CalculateBtn from "./CalculateBtn";

class MakeAPayment extends React.Component {
  constructor() {
    super();
  }

  calculate = (e) => {
    e.preventDefault();
    // const loanAmount = this.state.loanAmount;
    // const interestRate = this.state.interestRate;
    // const total = loanAmount - interestRate;
    // console.log(total);
    alert("Passed");
  };

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
            htmlFor="interest-rate"
            divClass="flex inputContainer"
            inputClass="form__input"
          />
          <FontAwesomeIcon icon="fas fa-percent" />
          <CalculateBtn calculateValue={this.calculate} />
        </form>

        <div className="makePayment">
          <Input
            label="Enter your payment amount"
            htmlFor="enter payment"
            divClass="flex inputContainer"
            labelClass="form__label"
            inputClass="form__input"
          />
          <FontAwesomeIcon icon="fas fa-dollar-sign" />
          <button className="btn btn--large makeAPayment">
            Make a payment
          </button>
        </div>
      </section>
    );
  }
}

export default MakeAPayment;
