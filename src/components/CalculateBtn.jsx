import React from "react";

const CalculateBtn = ({ calculateValue }) => (
  <button onClick={calculateValue} className="btn btn--small calculate">
    Calculate
  </button>
);

export default CalculateBtn;
