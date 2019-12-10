import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton"

//Import your array data to from the provided data file
import { specials } from "../../../data"
const Specials = ({ display, setDisplay }) => {
  // STEP 2 - add the imported data to state
  const [sps] = useState(specials)

  return (
    <div className="container-special">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {sps.map(sp => <SpecialButton display={display} setDisplay={setDisplay} key={sp} sp={sp} />)}
    </div>
  );
};

export default Specials