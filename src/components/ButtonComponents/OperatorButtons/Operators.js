import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton"

//Import your array data to from the provided data file
import {operators} from "../../../data"

const Operators = ({display, setDisplay}) => {
  // STEP 2 - add the imported data to state
  const [ops] = useState(operators)
  return (
    <div className="container-operators">
      {ops.map(op => <OperatorButton display={display} setDisplay={setDisplay} key={op.char} op={op} />)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators
