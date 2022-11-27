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
          amortization schedule' link above.
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

          <div className="selectContainer">
            <div className="select">
              <div>
                <span id="selectText">Month</span>
              </div>

              <div>
                <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
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

          <div className="selectContainer">
            <div className="select">
              <div>
                <span id="selectText">Month</span>
              </div>

              <div>
                <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div className="selectContainer">
            <div className="select">
              <div>
                <span id="selectText">Year</span>
              </div>

              <div>
                <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExtraPayments;
