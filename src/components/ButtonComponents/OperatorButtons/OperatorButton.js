import React from "react";

const OperatorButton = ({ op, display, setDisplay }) => {
  return (
    <button onClick={() => setDisplay(display + op.value)} className="button-operator">{op.char}</button>
  );
};

export default OperatorButton