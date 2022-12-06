import React from "react";
import "../styles/PaymentInfo.css";
import "../styles/Btn.css";

function PaymentInfo(props) {
  const {
    minimumPayment,
    paymentPrincipal,
    paymentInterest,
    paymentsLeft,
    paymentsMade,
  } = props;
  return (
    <section className="paymentInfoSection">
      <div className="paymentInfo">
        <p className="paymentInfo__text">Minimum Payment</p>
        <span className="paymentInfo__dollar">$</span>
        <span className="paymentInfo__num">{minimumPayment}</span>
      </div>

      <div className="totalPaid">
        <p className="flex totalPaid">
          <span>Total Principal</span>
          <span>${paymentPrincipal}</span>
        </p>
        <hr />
        <p className="flex totalPaid">
          <span>Total Interest</span>
          <span>${paymentInterest}</span>
        </p>
        <p>{paymentsLeft} payments left to pay off loan</p>
      </div>

      <div className="paymentHistory">
        <h2 className="paymentHistory__header">Payment History</h2>

        <div className="totalPaid">
          <p className="flex totalPaid">
            <span> Number of Payments Made</span>
            <span>{paymentsMade}</span>
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

export default PaymentInfo;
