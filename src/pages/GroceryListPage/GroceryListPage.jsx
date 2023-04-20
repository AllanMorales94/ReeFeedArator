import React from "react";

export default function GroceryListPage({ items }) {
  console.log(items)
  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
