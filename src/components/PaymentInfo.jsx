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
    balanceRemaining,
  } = props;
  return (
    <section className="paymentInfoSection">
      <div className="paymentInfo">
        <h2 className="paymentInfo__header">Minimum Payment</h2>
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
        <p>{paymentsLeft} minimum payments left to pay off loan</p>
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
            <span>Balance Remaining</span>
            <span>${balanceRemaining}</span>
          </p>
        </div>

        <h2 className="paymentHistory__debtFree hidden">You Are Debt Free</h2>
      </div>
    </section>
  );
}

export default PaymentInfo;
