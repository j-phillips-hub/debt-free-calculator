import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";

class MonthSelectForm extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      defaultFormValue: "Month",
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

  handleModal = () => {
    const currentState = this.state.visible;
    this.setState({ visible: !currentState });
  };

  handleSelectForm = (e) => {
    const newValue = e.target.getAttribute("value");
    this.setState({ defaultFormValue: newValue });
  };

  render() {
    const { visible, defaultFormValue } = this.state;
    return (
      <div onClick={this.handleModal}>
        <div className="select">
          <div>
            <span className="defaultValue">{defaultFormValue}</span>
          </div>
          <div>
            <FontAwesomeIcon icon="selectArrow fas fa-chevron-down" />
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
