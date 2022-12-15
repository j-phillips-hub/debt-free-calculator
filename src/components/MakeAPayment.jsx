import React from "react";
import Input from "./Input";
import PaymentInfo from "./PaymentInfo";
import PaymentsList from "./PaymentsList";
import FontAwesomeIcon from "./FontAwesomeIcon";
import "../styles/MakeAPayment.css";
import "../styles/Btn.css";
import "../styles/DebtFreeMsg.css";

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
      balanceRemaining: 0,
      payments: [],
    };
  }

  resetPaymentAmount = () => {
    const inputs = document.getElementsByTagName("input");

    for (const input of inputs) {
      if (input.name === "paymentAmount") {
        this.setState({ paymentAmount: 0 });
        input.value = "";
      }
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState((prev) => {
      if (name === "interestRate") {
        return { ...prev, [name]: +value / 100 };
      }
      return { ...prev, [name]: Number(value) };
    });
  };

  handleCalculate = (e) => {
    const { loanAmount, interestRate } = this.state;
    const interest = (interestRate / 12) * loanAmount;
    const paymentPrincipal = loanAmount * 0.01;
    const minimumPayment = paymentPrincipal + interest;

    this.setState({
      paymentInterest: interest.toFixed(2),
      paymentPrincipal: paymentPrincipal.toFixed(2),
      minimumPayment: minimumPayment.toFixed(2),
      paymentsLeft: loanAmount / paymentPrincipal,
      balanceRemaining: loanAmount,
    });
    e.preventDefault();
  };

  handlePaymentList = () => {
    const newPayment = {
      paymentAmount: this.state.paymentAmount,
      id: Date.now(),
    };

    this.setState((prevState) => ({
      payments: [...prevState.payments, newPayment],
    }));
  };

  handleMakePayment = (e) => {
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

    if (
      paymentAmount > loanAmount + Number(paymentInterest) ||
      paymentAmount < minimumPayment
    ) {
      alert(
        "Your payment cannot be greater than the remaining balance or less than the minimum payment"
      );
      this.resetPaymentAmount();
    } else if (loanAmount > 0) {
      this.setState({
        loanAmount: Math.max(0, newBalance.toFixed(2)),
        paymentInterest: Math.max(0, newInterest.toFixed(2)),
        paymentPrincipal: Math.max(0, newPaymentPrincipal.toFixed(2)),
        minimumPayment: Math.max(0, newMinimumPayment.toFixed(2)),
        paymentsMade: (totalPaymentsMade += 1),
        paymentsLeft: Math.max(0, Math.ceil(newBalance / newPaymentPrincipal)),
        balanceRemaining: Math.max(0, newBalance.toFixed(2)),
      });
      this.handlePaymentList();
    }

    e.preventDefault();
  };

  render() {
    const inputs = [
      {
        id: "loanAmount",
        label: "Loan amount",
        htmlFor: "loan-amount",
        name: "loanAmount",
        icon: "fa-dollar-sign",
      },
      {
        id: "interestRate",
        label: "Interest rate",
        htmlFor: "interest-rate",
        name: "interestRate",
        icon: "fa-percent",
      },
    ];

    const {
      minimumPayment,
      paymentPrincipal,
      paymentInterest,
      paymentsLeft,
      paymentsMade,
      loanAmount,
      payments,
      balanceRemaining,
    } = this.state;

    return (
      <React.Fragment>
        <section className="makeAPaymentSection">
          <form className="form">
            {inputs.map((input, index) => {
              const { label, htmlFor, name, icon } = input;
              return (
                <React.Fragment key={index}>
                  <Input
                    label={label}
                    htmlFor={htmlFor}
                    name={name}
                    handleInput={this.handleInput}
                    icon={`fas ${icon}`}
                  />
                </React.Fragment>
              );
            })}

            <button
              className={
                balanceRemaining === 0
                  ? "btn btn--small calculate"
                  : "btn btn--small disabled"
              }
              onClick={this.handleCalculate}
            >
              Calculate
            </button>
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
              onClick={this.handleMakePayment}
              className={
                loanAmount > 0
                  ? "btn btn--large makeAPayment"
                  : "btn btn--large disabled"
              }
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
          balanceRemaining={balanceRemaining}
        />

        <div className={balanceRemaining === 0 ? "debtFreeMsg" : "hidden"}>
          <h1>You Are Debt Free</h1>
        </div>

        <PaymentsList items={payments} />
      </React.Fragment>
    );
  }
}

export default MakeAPayment;
