import React from "react";
import Input from "./Input";
import MonthSelectForm from "./MonthSelectForm";
import YearSelectForm from "./YearSelectForm";
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

        <form className="flex extraPaymentsFlex">
          <Input
            label="to your monthly payment"
            labelClass="extraPaymentForm__label"
            for="extra-monthly-payment"
            divClass="flexReverse extraPaymentForm"
            inputClass="form__input"
          />
        </form>

        <div className="flex extraPaymentsFlex">
          <form>
            <Input
              label="as an extra yearly payment occurring every:"
              labelClass="extraPaymentForm__label"
              for="extra-yearly-payment"
              divClass="flexReverse extraPaymentForm"
              inputClass="form__input"
            />
          </form>
          <MonthSelectForm />
        </div>

        <div className="flex extraPaymentsFlex">
          <form>
            <Input
              label="as a one-time payment in:"
              labelClass="extraPaymentForm__label"
              for="one-time-payment"
              divClass="flexReverse extraPaymentForm"
              inputClass="form__input"
            />
          </form>
          <MonthSelectForm />
          <YearSelectForm />
        </div>
      </section>
    );
  }
}

export default ExtraPayments;
