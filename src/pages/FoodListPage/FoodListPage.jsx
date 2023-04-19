import React, { useState } from 'react';

import Item from '../../components/Item/Item'

export default function FoodListPage() {
  const [items, setItems] = useState([]);


  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Food List</h1>
      <Item items={items} onAddItem={handleAddItem} />
    </div>
  );
}
