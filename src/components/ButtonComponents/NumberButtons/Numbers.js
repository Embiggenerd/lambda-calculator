import React, { useState } from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import { numbers } from '../../../data'
//Import your array data to from the provided data file
import NumberButton from "./NumberButton"
const Numbers = ({ display, setDisplay }) => {
  // STEP 2 - add the imported data to state
  const [nums] = useState(numbers)
  return (
    <div className="container-numbers">
      {nums.map(num => <NumberButton display={display} setDisplay={setDisplay} key={num} num={num} />)}
    </div>
  );
};

export default Numbers
