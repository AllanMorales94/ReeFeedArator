import React from 'react';
import Item from './MonitoredItemList'

export default function MonitoredItemList({ items, onDelete }) {
  const handleDelete = (itemId) => {
    onDelete(itemId);
  };

  return (
    <div>
      <h1>Monitored Items</h1>
      <ul>
        {items.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} onDelete={() => handleDelete(item.id)} />
        ))}
      </ul>
    </div>
  );
}

