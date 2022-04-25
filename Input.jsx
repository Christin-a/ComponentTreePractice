import React from "react";

function InputArea() {
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={item} />
      {/* controls the value of the input by assigning it to the item variable */}
      {/* calls the handleChange function to update the item to be w.e is inputted */}
      <button onClick={addItem}>
      {/* calls the addItem function to update the list array */}

        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;