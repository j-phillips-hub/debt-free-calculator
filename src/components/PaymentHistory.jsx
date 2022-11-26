import React from "react";
import "../styles/PaymentHistory.css";
import "../styles/Btn.css";

class PaymentHistory extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="paymentHistorySection">
        <div className="paymentHistory">
          <p className="paymentHistory__text">Monthly Payments</p>
          <span className="paymentHistory__dollar">$</span>
          <span className="paymentHistory__num">93.22</span>
        </div>

        <div className="totalPaid">
          <p className="totalPaid__flex">
            <span>Total Principal Paid</span>
            <span>$5,000</span>
          </p>
          <hr />
          <p className="totalPaid__flex">
            <span> Total Interest Paid</span>
            <span>$80.89</span>
          </p>
        </div>

        <div className="compareRates">
          <button className="btn btn--large compareLoan">
            compare loan rates
          </button>
          <button className="btn btnAnchor">Show amortization schedule</button>
        </div>
      </section>
    );
  }
}

export default PaymentHistory;
