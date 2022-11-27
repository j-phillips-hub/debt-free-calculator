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
      <div className="selectContainer">
        <div className="select">
          <div>
            <span id="selectText">{this.props.text}</span>
          </div>

          <div>
            <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
          </div>
        </div>

        <div id="selectModal" class="selectModal">
          <div id={this.props.id} class="optionContainer">
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
      </div>
    );
  }
}

export default CustomSelectForm;
