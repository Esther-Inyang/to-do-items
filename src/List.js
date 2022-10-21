import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./index.css";

function List({ items, removeItem }) {
  return (
    <div className="todo-list">
      {items.map((item, index) => {
        const { id, todoItem } = item;
        return (
          <article key={id} className="item-container">
            <p className="todo-item">
              <span className="item-index">{index}.</span>
              {todoItem}
            </p>
            <div className="item-btns-container">
              <button type="button" className="edit-icon">
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
