import React, { useState } from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import { numbers } from '../../../data'
//Import your array data to from the provided data file
import NumberButton from "./NumberButton"
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [nums] = useState(numbers)
  return (
    <div>
      {nums.map(num => <NumberButton key={num} num={num} />)}
    </div>
  );
};

export default Numbers
