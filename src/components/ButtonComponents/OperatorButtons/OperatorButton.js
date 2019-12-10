import React from "react";

const OperatorButton = ({ op, display, setDisplay }) => {
  const clickHandler = () => op.char === "=" ? setDisplay(eval(display)) : setDisplay(display + op.value)
  return (
    <button onClick={() => clickHandler()} className="button-operator">{op.char}</button>
  );
};

export default OperatorButton