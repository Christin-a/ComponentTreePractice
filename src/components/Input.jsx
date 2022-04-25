import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");
  //sets the starting state of the item in the input text

  function handleChange(event) {
    const newItem = event.target.value;
    //retrieves the value of the item from the inputText
    setItem(newItem);
    //updates the state of the item in the input text to newItem
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={item} />
      {/* controls the value of the input by assigning it to the item variable */}
      {/* calls the handleChange function to update the item to be w.e is inputted */}
      <button
        onClick={() => {
          props.onClick(item);
          setItem("");
          // resets the input text to be empty
        }}
      >
        {/* when the button is clicked, --> trigger the onClick function (+ addItems fuction from App component) */}
        {/* It will also pass in the "item" that lives inside the input component */}
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
