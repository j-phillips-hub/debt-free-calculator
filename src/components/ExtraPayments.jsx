import React from "react";
import "../styles/ExtraPayments.css";

class ExtraPayments extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="extraPaymentsSection">
        <p className="extraPaymentsSection__text">
          Calculate the impact of extra payments using any combination of the
          inputs below. To see your new estimated payoff date, click 'Show
          amortization scheduale' link above.
        </p>

        <div className="flex extraPaymentsFlex">
          <form className="flexReverse extraPaymentForm">
            <label
              className="extraPaymentForm__label"
              htmlFor="extra-monthly-payment"
            >
              to your monthly payment
            </label>
            <input className="form__input" type="text" />
          </form>
        </div>

        <div className="flex extraPaymentsFlex">
          <form className="flexReverse extraPaymentForm">
            <label
              className="extraPaymentForm__label"
              htmlFor="extra-yearly-payment"
            >
              as an extra yearly payment occurring every:
            </label>
            <input className="form__input" type="text" />
          </form>
          <input type="text" />
        </div>

        <div className="flex extraPaymentsFlex">
          <form className="flexReverse extraPaymentForm">
            <label
              className="extraPaymentForm__label"
              htmlFor="one-time-payment"
            >
              as a one-time payment in:
            </label>
            <input className="form__input" type="text" />
          </form>
          <input type="text" />
          <input type="text" />
        </div>
      </section>
    );
  }
}

export default ExtraPayments;
