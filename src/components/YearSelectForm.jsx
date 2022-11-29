import React from "react";

class YearSelectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
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

  toggleModal = () => {
    const currentState = this.state.visible;
    this.setState({ visible: !currentState });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div className="select">
          <div>
            <span>Year</span>
          </div>

          <div onClick={this.toggleModal}>
            <i
              className={
                visible
                  ? "selectArrowRotate selectArrow fas fa-chevron-down"
                  : "selectArrow fas fa-chevron-down"
              }
            ></i>
          </div>
        </div>

        <div className={visible ? "modalVisible selectModal" : "selectModal"}>
          {this.years.map((year, index) => {
            return (
              <React.Fragment key={index}>
                <p className="select__option" value={year}>
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
