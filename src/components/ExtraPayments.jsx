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
          <select name="" id="">
            <option value="">Month</option>
            <option value="">January</option>
            <option value="">Febuary</option>
            <option value="">March</option>
            <option value="">April</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
          </select>
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
          <select name="" id="">
            <option value="" selected>
              Month
            </option>
            <option value="">Month</option>
            <option value="">January</option>
            <option value="">Febuary</option>
            <option value="">March</option>
            <option value="">April</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
          </select>

          <select name="" id="">
            <option value="">Year</option>
            <option value="">2022</option>
            <option value="">2023</option>
            <option value="">2024</option>
            <option value="">2025</option>
            <option value="">2026</option>
            <option value="">2027</option>
            <option value="">2028</option>
            <option value="">2029</option>
            <option value="">2030</option>
          </select>
        </div>
      </section>
    );
  }
}

export default ExtraPayments;
