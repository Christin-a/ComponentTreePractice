import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./Input";

function App() {
  const [list, setList] = useState([]);
  //sets the starting state of the list array

  function addItem(item) {
    setList((prevValue) => {
      // updates the list array to include all previous items
      return [...prevValue, item];
      // adds new item from input text into the list array
    });
  }

  function deleteItem(id) {
    setList((prevValue) => {
      //basically sets the list to the previous value excluding the item with the id specified below
      return prevValue.filter((item, index) => {
        //filter function takes two inputs the element and its index
        return index !== id;
        //return all of the items where the id is not the one being filtered
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClick={addItem} />
      <div>
        <ul>
          {list.map((newListItem, index) => (
            //index of each item mapped through the array
            <ToDoItem
              key={index}
              id={index}
              text={newListItem}
              onChecked={deleteItem}
              //the onChecked property passes a function that can be triggered in the ToDoItem component
            />
            // adds an li to each item in the array
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
