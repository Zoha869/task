// src/components/StateExample.jsx
import { useState } from "react";

function StateExample() {
  let variableX = 100;
  const [state_variableX, set_variableX] = useState(0);
  const [state_stringVariable, set_stringVariable] = useState("initial values");
  const [state_array_color, set_array_color] = useState(["red", "yellow", "green"]);

  const changeValue = () => {
    variableX = 200;
    set_variableX(500);
    set_stringVariable("New Value");
  };

  const updateArray = () => {
    state_array_color.push("Magenta");
    set_array_color([...state_array_color]);
  };

  return (
    <div>
      <h1>Value of simple variable: {variableX}</h1>
      <h1><b>State Variable:</b> {state_variableX}</h1>
      <h1><b>String State:</b> {state_stringVariable}</h1>
      <button onClick={changeValue} style={{backgroundColor:"black", color:"white", padding:"5px"}}>
        Change Value
      </button>

      <p><b>Color Array:</b> {state_array_color.join(", ")}</p>
      <ul>
        {state_array_color.map((elem, index) => (
          <li key={index}>Index {index}: {elem}</li>
        ))}
      </ul>

      <button onClick={updateArray} style={{backgroundColor:"black", color:"white"}}>
        Add "Magenta" in Array
      </button>
    </div>
  );
}

export default StateExample;