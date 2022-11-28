import React from "react";

class MonthSelectForm extends React.Component {
  constructor() {
    super();
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  render() {
    return (
      <div className="selectContainer">
        <div className="select">
          <div>
            <span id="selectText">Month</span>
          </div>

          <div>
            <i id="selectArrow" className="selectArrow fas fa-chevron-down"></i>
          </div>
        </div>

        <div id="selectModal" className="selectModal">
          <div id="optionContainer" className="optionContainer"></div>
          {this.months.map((month) => {
            return (
              <React.Fragment>
                <p className="option" value={month}>
                  {month}
                </p>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MonthSelectForm;
