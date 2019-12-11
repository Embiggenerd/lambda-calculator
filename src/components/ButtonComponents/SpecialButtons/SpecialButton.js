import React from "react";

const SpecialButton = ({ sp, display, setDisplay }) => {
  const clickHandler = () => sp === "C" ? setDisplay("") : setDisplay(display + sp)
  return (
    <button onClick={() => clickHandler()} className='button-special'>{sp}</button>
  );
};

export default SpecialButton