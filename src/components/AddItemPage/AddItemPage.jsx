

import React, { useState } from 'react';

export default function AddItemPage({ addItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addItem({ name, quantity });
    setName('');
    setQuantity('');
  }

  return (
    <div>
      <h1>Add Item Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

// create a form 