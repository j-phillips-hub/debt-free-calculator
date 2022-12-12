import React from "react";
import "../styles/PaymentsList.css";

function PaymentsList(props) {
  const { items } = props;
  return (
    <section className="paymentsListSection">
      <h2>Payments</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.paymentAmount}</li>
        ))}
      </ul>
    </section>
  );
}

export default PaymentsList;
