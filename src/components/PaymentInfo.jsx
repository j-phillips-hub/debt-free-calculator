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

  const totalPaid = [
    [
      {
        className: "flex totalPaid",
        title: "Total Principle",
        number: `$ ${paymentPrincipal}`,
      },
      {
        className: "flex totalPaid",
        title: "Total Interest",
        number: `$ ${paymentInterest}`,
      },
    ],

    [
      {
        className: "flex totalPaid",
        title: "Number of Paymnets Made",
        number: `$ ${paymentsMade}`,
      },
      {
        className: "flex totalPaid",
        title: "Balance Remaining",
        number: `$ ${balanceRemaining}`,
      },
    ],
  ];

  return (
    <section className="paymentInfoSection">
      <div className="paymentInfo">
        <h2 className="paymentInfo__header">Minimum Payment</h2>
        <span className="paymentInfo__dollar">$</span>
        <span className="paymentInfo__num">{minimumPayment}</span>
      </div>

      <div className="totalPaid">
        {totalPaid[0].map((item, index) => {
          return (
            <React.Fragment key={index}>
              <p className={item.className}>
                <span>{item.title}</span>
                <span>{item.number}</span>
              </p>
              <hr />
            </React.Fragment>
          );
        })}
      </div>

      <p>{paymentsLeft} minimum payments left to pay off loan</p>

      <div className="paymentHistory">
        <h2 className="paymentHistory__header">Payment History</h2>

        <div className="totalPaid">
          {totalPaid[1].map((item, index) => {
            return (
              <React.Fragment key={index}>
                <p className={item.className}>
                  <span>{item.title}</span>
                  <span>{item.number}</span>
                </p>
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PaymentInfo;
