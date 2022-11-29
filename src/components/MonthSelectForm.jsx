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

  toggleModal = () => {
    const currentState = this.state.visible;
    this.setState({ visible: !currentState });
  };

  render() {
    const { visible } = this.state;
    return (
      <div onClick={this.toggleModal}>
        <div className="select">
          <div>
            <span>Month</span>
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
                <p className="select__option" value={month}>
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
