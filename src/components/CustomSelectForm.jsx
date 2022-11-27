import React from "react";

class CustomSelectForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    const months = [
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
    return (
      <div id="selectModal" class="selectModal">
        <div id="optionContainer" class="optionContainer">
          {months.map((month) => {
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

export default CustomSelectForm;
