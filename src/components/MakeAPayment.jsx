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
      minimunPayment: "",
    };
  }

  handleVal = (e) => {
    const data = e.target.getAttribute("data");
    const value = e.target.value;

    if (data.match("loan-amount")) {
      this.setState({ loanAmount: value });
    } else if (data.match("interest-rate")) {
      this.setState({ interestRate: value / 100 });
    }
  };

  calculateMinimunPayment = (e) => {
    const interest = (this.state.interestRate / 12) * this.state.loanAmount;
    const basePayment = this.state.loanAmount * 0.01;
    const minimunPayment = basePayment + interest;
    this.setState({ minimunPayment: minimunPayment });
    e.preventDefault();
  };

  render() {
    return (
      <section className="makeAPaymentSection">
        <form className="form">
          <Input
            label="Loan amount"
            htmlFor="loan-amount"
            data="loan-amount"
            handleInput={this.handleVal}
          />
          <FontAwesomeIcon icon="fas fa-dollar-sign" />

          <Input
            label="Interest rate"
            htmlFor="interest-rate"
            handleInput={this.handleVal}
            data="interest-rate"
          />
          <FontAwesomeIcon icon="fas fa-percent" />
          <CalculateBtn calculateValue={this.calculateMinimunPayment} />
        </form>

        <div className="makePayment">
          <Input
            label="Enter your payment amount"
            htmlFor="enter payment"
            data="total"
            handleInput={this.handleVal}
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
