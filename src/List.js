import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./index.css";

function List({ items, removeItem, editItemAdded }) {
  return (
    <div className="todo-list">
      {items.map((item) => {
        const { id, todoItem } = item;
        return (
          <article key={id} className="item-container">
            <p className="todo-item">{todoItem}</p>
            <div className="item-btns-container">
              <button
                type="button"
                className="edit-icon"
                onClick={() => editItemAdded(id)}
              >
                <FaEdit />
              </button>

              <button
                type="button"
                className="delete-icon"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
