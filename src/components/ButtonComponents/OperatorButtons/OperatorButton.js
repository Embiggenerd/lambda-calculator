import React from "react";

const OperatorButton = ({op}) => {
  return (
    <button className="op-button">{op.char}</button>
  );
};

export default OperatorButton