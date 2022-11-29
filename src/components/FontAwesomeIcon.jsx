import React from "react";

function FontAwesomeIcon(props) {
  return (
    <React.Fragment>
      <i className={props.icon}></i>
    </React.Fragment>
  );
}

export default FontAwesomeIcon;
