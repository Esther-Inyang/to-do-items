import React, { useState } from "react";
import "./index.css";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoValue(value);
  };

  const showAlert = (show = false, msg = "", status = "") => {
    setAlert({ show, msg, status });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoValue) {
      //show danger alert
      showAlert(true, "please enter value..", "danger");
    } else if (todoValue && editItem) {
      // edit
    } else {
      //show success alert
      showAlert(true, "item added to list..", "success");
      //add Item to list
      const newItem = {
        id: new Date().getTime().toString(),
        todoItem: todoValue,
      };
      setItems([...items, newItem]);
      setTodoValue("");
    }
  };

  const removeItem = (id) => {
    showAlert(true, "item removed", "dange");
    setItems(items.filter((item) => item.id !== id));
  };

  const clearList = () => {
    showAlert(true, "empty list", "danger");
    setItems([]);
  };

  return (
    <main className="app-container">
      <h1 className="page-title">To-do Items</h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <div className="input-container">
          <input
            type="text"
            name="input"
            value={todoValue}
            className="todo-input"
            placeholder="e.g read about react hooks"
            onChange={handleChange}
            // onChange={(e)=>setText(e.target.value)}
          />
          <button
            type="submit"
            className={`add-todo-input-btn ${
              editItem && "edit-todo-input-btn"
            }`}
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </div>
      </form>
      {items.length > 0 && (
        <div className="todo-list-container">
          <List items={items} removeItem={removeItem} />

          <button className="clear-items-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
