import React from "react";

class MonthSelectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };

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

  showModal = () => {
    this.setState({ visible: true });
    console.log(this.state.visible);
  };

  render() {
    return (
      <div>
        <div className="select">
          <div>
            <span id="selectText">Month</span>
          </div>

          <div onClick={this.showModal}>
            <i id="selectArrow" className="selectArrow fas fa-chevron-down"></i>
          </div>
        </div>

        <div
          id="selectModal"
          className={
            this.state.visible ? "modalVisible selectModal" : "selectModal"
          }
        >
          <div id="optionContainer" className="optionContainer"></div>
          {this.months.map((month, index) => {
            return (
              <React.Fragment key={index}>
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
