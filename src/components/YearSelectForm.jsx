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
      <div className="selectContainer">
        <div className="select">
          <div>
            <span id="selectText">Year</span>
          </div>

          <div onClick={this.toggleModal}>
            <i id="selectArrow" className="selectArrow fas fa-chevron-down"></i>
          </div>
        </div>

        <div
          id="selectModal"
          className={visible ? "modalVisible selectModal" : "selectModal"}
        >
          <div id="optionContainer" className="optionContainer"></div>
          {this.years.map((year, index) => {
            return (
              <React.Fragment key={index}>
                <p className="option" value={year}>
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
