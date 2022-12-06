import React from "react";
import Input from "./Input";
import PaymentInfo from "./PaymentInfo";
import FontAwesomeIcon from "./FontAwesomeIcon";
import CalculateBtn from "./CalculateBtn";
import "../styles/MakeAPayment.css";
import "../styles/Btn.css";

const paymentAmounts = [];

class MakeAPayment extends React.Component {
  constructor() {
    super();
    this.state = {
      loanAmount: "",
      interestRate: "",
      loanTerm: 0,
      minimumPayment: 0,
      paymentPrincipal: 0,
      paymentInterest: 0,
      paymentsLeft: 0,
      paymentsMade: 0,
      paymentAmount: 0,
    };
  }

  getInputValue = (e) => {
    const data = e.target.getAttribute("data");
    const inputValue = e.target.value;

    // Clean Up
    if (data.match("loan-amount")) {
      this.setState({ loanAmount: inputValue });
    } else if (data.match("interest-rate")) {
      this.setState({ interestRate: inputValue });
    } else if (data.match("loan-term")) {
      this.setState({ loanTerm: inputValue });
    } else if (data.match("payment-amount")) {
      this.setState({ paymentAmount: inputValue });
    }
  };

  calculateMinimumPayment = (e) => {
    const { loanAmount, interestRate, loanTerm } = this.state;
    const interest = loanAmount * (interestRate / 100 / loanTerm);
    const minimumPayment = loanAmount / loanTerm + interest;
    const paymentPrincipal = minimumPayment - interest;

    this.setState({
      minimumPayment: minimumPayment.toFixed(2),
      paymentPrincipal: paymentPrincipal.toFixed(2),
      paymentInterest: interest.toFixed(2),
      paymentsLeft: loanTerm,
    });
    e.preventDefault();
  };

  MakeAPayment = (e) => {
    let { loanTerm, paymentsLeft, paymentsMade, paymentAmount } = this.state;

    if (paymentsLeft > 0 && paymentAmount > 0) {
      this.setState({ loanTerm: (loanTerm -= 1) });
      this.setState({ paymentsLeft: loanTerm });
    }

    if (paymentAmount > 0) {
      paymentAmounts.push(paymentAmount);
      console.log(paymentAmounts);
    }

    e.preventDefault();
  };

  render() {
    const {
      minimumPayment,
      paymentPrincipal,
      paymentInterest,
      paymentsLeft,
      paymentsMade,
    } = this.state;
    return (
      <React.Fragment>
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
            <Input
              label="Loan term in months"
              htmlFor="loan-term"
              data="loan-term"
              handleInput={this.getInputValue}
            />
            <CalculateBtn calculateValue={this.calculateMinimumPayment} />
          </form>

          <div className="makePayment">
            <Input
              label="Enter your payment amount"
              htmlFor="enter payment"
              data="payment-amount"
              handleInput={this.getInputValue}
            />
            <FontAwesomeIcon icon="fas fa-dollar-sign" />
            <button
              onClick={this.MakeAPayment}
              className="btn btn--large makeAPayment"
            >
              Make a payment
            </button>
          </div>
        </section>

        <PaymentInfo
          minimumPayment={minimumPayment}
          paymentPrincipal={paymentPrincipal}
          paymentInterest={paymentInterest}
          paymentsLeft={paymentsLeft}
          paymentsMade={paymentsMade}
        />
      </React.Fragment>
    );
  }
}

export default MakeAPayment;
