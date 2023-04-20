import React, { useState } from 'react';


import MonitoredItemList from '../../components/MonitoredItemList/MonitoredItemList';

export default function FoodListPage() {
  const [items, setItems] = useState([]);


  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Food List</h1>
      <MonitoredItemList items={items} />
    </div>
  );
}
