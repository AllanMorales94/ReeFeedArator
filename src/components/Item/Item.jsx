export default function Item({items}) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} />
      ))}
    </ul>
  )
}


//write functonality map through all items and display each item as an unordered list 