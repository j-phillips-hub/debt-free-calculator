import React from "react";

class CustomSelectForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="selectModal" class="selectModal">
        <div id="optionContainer" class="optionContainer">
          <p class="option" value="January">
            January
          </p>
          <p class="option" value="February">
            February
          </p>
          <p class="option" value="March">
            March
          </p>
          <p class="option" value="April">
            April
          </p>
          <p class="option" value="May">
            May
          </p>
          <p class="option" value="June">
            June
          </p>
          <p class="option" value="July">
            July
          </p>
          <p class="option" value="August">
            August
          </p>
          <p class="option" value="September">
            September
          </p>
          <p class="option" value="October">
            October
          </p>
          <p class="option" value="November">
            November
          </p>
          <p class="option" value="December">
            December
          </p>
        </div>
      </div>
    );
  }
}

export default CustomSelectForm;
