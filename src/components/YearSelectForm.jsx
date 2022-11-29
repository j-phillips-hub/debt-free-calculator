import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";

class YearSelectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      defaultFormValue: "Year",
    };

    this.years = [
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
      "2027",
      "2028",
      "2029",
      "2030",
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
            <span>{defaultFormValue}</span>
          </div>

          <div>
            <FontAwesomeIcon icon="selectArrow fas fa-chevron-down" />
          </div>
        </div>

        <div className={visible ? "modalVisible selectModal" : "selectModal"}>
          {this.years.map((year, index) => {
            return (
              <React.Fragment key={index}>
                <p
                  onClick={this.handleSelectForm}
                  className="select__option"
                  value={year}
                >
                  {year}
                </p>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default YearSelectForm;
