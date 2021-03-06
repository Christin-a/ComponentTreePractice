import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
        //props.onChecked will only be called when the item is clicked
        // it's triggering the deleteItem function from the App component
      }}
    >
      <li>{props.text}</li>
    </div>
  );
  //passed in from ToDoItem custom component
}

// style={ { display: isLoggedIn ? 'block' : 'none' } }

export default ToDoItem;
