import React from "react";
import "../styles/PaymentInfo.css";
import "../styles/Btn.css";

class PaymentInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="paymentInfoSection">
        <div className="paymentInfo">
          <p className="paymentInfo__text">Minimum Payment</p>
          <span className="paymentInfo__dollar">$</span>
          <span className="paymentInfo__num">93.22</span>
        </div>

        <div className="totalPaid">
          <p className="flex totalPaid">
            <span>Total Principal</span>
            <span>$5,000</span>
          </p>
          <hr />
          <p className="flex totalPaid">
            <span>Total Interest</span>
            <span>$80.89</span>
          </p>
          <p>10 payments to be debt free!</p>
        </div>

        <div className="paymentHistory">
          <h2 className="paymentHistory__header">Payment History</h2>

          <div className="totalPaid">
            <p className="flex totalPaid">
              <span> Number of Payments Made</span>
              <span>2</span>
            </p>
            <hr />
            <p className="flex totalPaid">
              <span>Total Principle Paid</span>
              <span>$5000</span>
            </p>
            <hr />
            <p className="flex totalPaid">
              <span>Total Interest Paid</span>
              <span>$7</span>
            </p>
            <hr />
            <p className="flex totalPaid">
              <span>Balance Remaining</span>
              <span>$2000</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default PaymentInfo;
