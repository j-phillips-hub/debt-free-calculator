import React from "react";
import Input from "./Input";
import FontAwesomeIcon from "./FontAwesomeIcon";
import CalculateBtn from "./CalculateBtn";
import "../styles/MakeAPayment.css";
import "../styles/Btn.css";

class MakeAPayment extends React.Component {
  constructor() {
    super();
    this.state = {
      loanAmount: "",
      interestRate: "",
      total: "",
    };
  }

  handleVal = (e) => {
    console.log(e.target.value);
  };

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
            htmlFor="loan-amount"
            handleInput={this.handleVal}
          />
          <FontAwesomeIcon icon="fas fa-dollar-sign" />

          <Input
            label="Interest rate"
            htmlFor="interest-rate"
            handleInput={this.handleVal}
          />
          <FontAwesomeIcon icon="fas fa-percent" />
          <CalculateBtn calculateValue={this.calculate} />
        </form>

        <div className="makePayment">
          <Input label="Enter your payment amount" htmlFor="enter payment" />
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
