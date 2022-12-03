import React from "react";

function CalculateBtn(props) {
  return (
    <button onClick={props.calculateValue} className="btn btn--small calculate">
      Calculate
    </button>
  );
}

export default CalculateBtn;
