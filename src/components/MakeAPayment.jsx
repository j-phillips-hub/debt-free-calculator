import React from "react";
import Input from "./Input";
import PaymentInfo from "./PaymentInfo";
import FontAwesomeIcon from "./FontAwesomeIcon";
import CalculateBtn from "./CalculateBtn";
import "../styles/MakeAPayment.css";
import "../styles/Btn.css";

// const paymentAmounts = [];

class MakeAPayment extends React.Component {
  constructor() {
    super();
    this.state = {
      loanAmount: 0,
      interestRate: 0,
      paymentAmount: 0,
      minimumPayment: 0,
      paymentPrincipal: 0,
      paymentInterest: 0,
      paymentsLeft: 0,
      paymentsMade: 0,
    };
  }

  resetPaymentAmount = () => {
    const inputs = document.getElementsByTagName("input");

    for (const input of inputs) {
      if (input.name === "paymentAmount") {
        this.setState({ paymentAmount: "" });
        input.value = "";
      }
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => {
      if (name === "interestRate") {
        return { ...prev, [name]: value / 100 };
      }
      return { ...prev, [name]: Number(value) };
    });
  };

  calculateMinimumPayment = (e) => {
    const { loanAmount, interestRate } = this.state;
    const interest = (interestRate / 12) * loanAmount;
    const paymentPrincipal = loanAmount * 0.01;
    const minimumPayment = paymentPrincipal + interest;

    this.setState({
      paymentInterest: interest.toFixed(2),
      paymentPrincipal: paymentPrincipal.toFixed(2),
      minimumPayment: minimumPayment.toFixed(2),
      paymentsLeft: loanAmount / paymentPrincipal,
    });
    e.preventDefault();
  };

  MakeAPayment = (e) => {
    const {
      loanAmount,
      paymentAmount,
      minimumPayment,
      paymentInterest,
      paymentsMade,
      interestRate,
    } = this.state;

    let totalPaymentsMade = paymentsMade;
    const newBalance = loanAmount - (paymentAmount - paymentInterest);
    const newInterest = (interestRate / 12) * newBalance;
    const newPaymentPrincipal = newBalance * 0.01;
    const newMinimumPayment = newPaymentPrincipal + newInterest;

    if (minimumPayment <= paymentAmount) {
      this.setState({
        loanAmount: Math.max(0, newBalance.toFixed(2)),
        paymentInterest: Math.max(0, newInterest.toFixed(2)),
        paymentPrincipal: Math.max(0, newPaymentPrincipal.toFixed(2)),
        minimumPayment: Math.max(0, newMinimumPayment.toFixed(2)),
        paymentsMade: (totalPaymentsMade += 1),
        paymentsLeft: Math.max(0, Math.ceil(newBalance / newPaymentPrincipal)),
      });
    } else {
      alert(
        "Your payment needs to be equal to or more than the minimum payment"
      );
      this.resetPaymentAmount();
    }

    if (minimumPayment === 0) {
      this.setState({
        loanAmount: 0,
        paymentsLeft: 0,
      });
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
      loanAmount,
    } = this.state;

    return (
      <React.Fragment>
        <section className="makeAPaymentSection">
          <form className="form">
            <Input
              label="Loan amount"
              htmlFor="loan-amount"
              name="loanAmount"
              handleInput={this.handleInput}
            />
            <FontAwesomeIcon icon="fas fa-dollar-sign" />

            <Input
              label="Interest rate"
              htmlFor="interest-rate"
              handleInput={this.handleInput}
              name="interestRate"
            />
            <FontAwesomeIcon icon="fas fa-percent" />
            <CalculateBtn calculateValue={this.calculateMinimumPayment} />
          </form>

          <div className="makePayment">
            <Input
              label="Enter your payment amount"
              htmlFor="enter payment"
              name="paymentAmount"
              handleInput={this.handleInput}
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
          balanceRemaining={loanAmount}
        />
      </React.Fragment>
    );
  }
}

export default MakeAPayment;
