import React from "react";

const NumberButton = ({ num, display, setDisplay }) => {
  const classHandler = () => num === "0" ? "button-number zero" : "button-number"
  return (
    <button onClick={()=>setDisplay(display+num)} className={classHandler()}>{num}</button>
  );
};

export default NumberButton
