import React from "react";

class PaymentHistory extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <div>
          <p>Monthly Payments</p>
          <div>
            <span>$</span>
            <span>93.22</span>
          </div>
        </div>

        <div>
          <p>
            <span>Total Principal Paid</span>
            <span>$5,000</span>
          </p>
          <hr />
          <p>
            <span> Total Interest Paid</span>
            <span>$80.89</span>
          </p>
        </div>

        <div>
          <button>compare loan rates</button>
          <button>Show amortization schedule</button>
        </div>
      </section>
    );
  }
}

export default PaymentHistory;
