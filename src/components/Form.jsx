import React from "react";

class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="">Loan amount</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Loan term in years</label>
          <input type="text" />
        </div>

        <div>Or</div>

        <div>
          <label htmlFor="">Loan term in months</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Interest rate per year</label>
          <input type="text" />
        </div>

        <button>Calculate</button>
      </form>
    );
  }
}

export default Form;
