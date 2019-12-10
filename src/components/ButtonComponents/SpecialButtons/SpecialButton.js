import React from "react";

const SpecialButton = (props) => {
  const { sp } = props
  console.log('special', sp)
  return (
    <button className='button-special'>{sp}</button>    
  );
};

export default SpecialButton