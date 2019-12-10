import React from "react";

const OperatorButton = ({op}) => {
  console.log('operator',op)
  return (
    <button className="button-operator">{op.char}</button>
  );
};

export default OperatorButton