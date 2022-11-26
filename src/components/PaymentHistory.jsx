import React from "react";
import "../styles/PaymentHistory.css";
import "../styles/Btn.css";

class PaymentHistory extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="PaymentHistorySection">
        <div className="PaymentHistory">
          <p className="PaymentHistory__Text">Monthly Payments</p>
          <span className="PaymentHistory__Dollar">$</span>
          <span className="PaymentHistory__Num">93.22</span>
        </div>

        <div className="TotalPaid">
          <p className="TotalPaid__Flex">
            <span>Total Principal Paid</span>
            <span>$5,000</span>
          </p>
          <hr />
          <p className="TotalPaid__Flex">
            <span> Total Interest Paid</span>
            <span>$80.89</span>
          </p>
        </div>

        <div className="CompareRates">
          <button className="Btn Btn--Large CompareLoan">
            compare loan rates
          </button>
          <button className="Btn BtnAnchor">Show amortization schedule</button>
        </div>
      </section>
    );
  }
}

export default PaymentHistory;
