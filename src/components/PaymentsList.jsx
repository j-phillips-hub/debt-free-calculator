import React from "react";
import "../styles/PaymentsList.css";

function PaymentsList(props) {
  const { items } = props;
  return (
    <section className="paymentsListSection">
      <h2>Payments</h2>
      <ul className="paymentsList">
        {items.map((item, index) => (
          <li className="paymentsList__item" key={item.id}>
            Payment # {index + 1}.{" "}
            <span className="paymentsList__item--green">
              ${item.paymentAmount}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PaymentsList;
