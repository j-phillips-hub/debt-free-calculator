import React from "react";

class MonthSelectForm extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      value: "Month",
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

  toggleModal = () => {
    const currentState = this.state.visible;
    this.setState({ visible: !currentState });
  };

  handleSelectForm = (e) => {
    const newValue = e.target.getAttribute("value");
    this.setState({ value: newValue });
  };

  render() {
    const { visible, value } = this.state;
    return (
      <div onClick={this.toggleModal}>
        <div className="select">
          <div>
            <span className="defaultValue">{value}</span>
          </div>

          <div>
            <i
              className={
                visible
                  ? "selectArrow fas fa-chevron-down selectArrowRotate"
                  : "selectArrow fas fa-chevron-down"
              }
            ></i>
          </div>
        </div>

        <div className={visible ? "modalVisible selectModal" : "selectModal"}>
          {this.months.map((month, index) => {
            return (
              <React.Fragment key={index}>
                <p
                  onClick={this.handleSelectForm}
                  className="select__option"
                  value={month}
                >
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
