import React from 'react'
import Item from '../Item/Item'

export default function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} />
      ))}
    </ul>
  )
}
