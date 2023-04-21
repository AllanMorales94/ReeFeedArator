import React from "react";

export default function GroceryListPage({ items, handleDelete }) {
  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



