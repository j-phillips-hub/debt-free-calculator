import React from "react";
import "../styles/ExtraPayments.css";

class ExtraPayments extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="ExtraPaymentsSection">
        <div>
          <p>
            Calculate the impact of extra payments using any combination of the
            inputs below. To see your new estimated payoff date, click 'Show
            amortization scheduale' link above.
          </p>

          <div className="Flex">
            <div className="FlexReverse">
              <label htmlFor="extra-monthly-payment">
                to your monthly payment
              </label>
              <input type="text" />
            </div>
          </div>

          <div className="Flex">
            <div className="FlexReverse">
              <label htmlFor="extra-yearly-payment">
                as an extra yearly payment occurring every:
              </label>
              <input type="text" />
            </div>
          </div>

          <div className="Flex">
            <div className="FlexReverse">
              <label htmlFor="one-time-payment">
                as a one-time payment in:
              </label>
              <input type="text" />
            </div>
            <input type="text" />
            <input type="s" />
          </div>
        </div>
      </section>
    );
  }
}

export default ExtraPayments;
