import React from "react";
import Input from "./Input";
import FontAwesomeIcon from "./FontAwesomeIcon";
import CalculateBtn from "./CalculateBtn";
import "../styles/MakeAPayment.css";
import "../styles/Btn.css";

class MakeAPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: "",
      interestRate: "",
      minimumPayment: "",
    };
  }

  getInputValue = (e) => {
    const data = e.target.getAttribute("data");
    const inputValue = e.target.value;

    if (data.match("loan-amount")) {
      this.setState({ loanAmount: inputValue });
    } else if (data.match("interest-rate")) {
      this.setState({ interestRate: inputValue / 100 });
    }
  };

  calculateMinimumPayment = (e) => {
    const { loanAmount, interestRate } = this.state;
    const totalInterest = (interestRate / 12) * loanAmount;
    const basePayment = loanAmount * 0.01;
    const minimumPayment = basePayment + totalInterest;
    this.setState({ minimumPayment: minimumPayment.toFixed(2) });
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
            handleInput={this.getInputValue}
          />
          <FontAwesomeIcon icon="fas fa-dollar-sign" />

          <Input
            label="Interest rate"
            htmlFor="interest-rate"
            handleInput={this.getInputValue}
            data="interest-rate"
          />
          <FontAwesomeIcon icon="fas fa-percent" />
          <CalculateBtn calculateValue={this.calculateMinimumPayment} />
        </form>

        <div className="makePayment">
          <Input
            label="Enter your payment amount"
            htmlFor="enter payment"
            data="total"
            handleInput={this.getInputValue}
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
