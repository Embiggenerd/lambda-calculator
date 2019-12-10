import React from "react";

const NumberButton = ({ num, display, setDisplay }) => {
  return (
    <button onClick={()=>setDisplay(display+num)} className="button-number">{num}</button>
  );
};

export default NumberButton
