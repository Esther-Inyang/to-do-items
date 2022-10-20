import React, { useState } from "react";
import "./index.css";
import Items from "./Items";
import Alert from "./Alert";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      //display alert
    } else if (todo && editItem) {
      setEditItem(true);
    }

    console.log("submit clicked");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo(value);

    if (todo) {
      setEditItem(true);
    }
  };

  return (
    <main className="main-container">
      <h1 className="page-title">To-do Items App</h1>
      <div className="todo-container">
        <form className="todo-form" onSubmit={handleSubmit}>
          {alert.show && <Alert />}
          <div className="input-container">
            <input
              type="text"
              name="input"
              value={todo}
              className="todo-input"
              placeholder="e.g studying React Hooks"
              onChange={handleChange}
              // onChange={(e)=>setText(e.target.value)}
            />
            <button
              type="submit"
              className={`todo-btn ${editItem && "edit-btn"}`}
            >
              {editItem ? "edit item" : "add item"}
            </button>
          </div>
        </form>
        <div className="todo-items-container">
          <Items />
          <button className="clear-items-btn">clear items</button>
        </div>
      </div>
    </main>
  );
}

export default App;
