import React from "react";

function CalculateBtn({ calculateValue }) {
  return (
    <button onClick={calculateValue} className="btn btn--small calculate">
      Calculate
    </button>
  );
}

export default CalculateBtn;
