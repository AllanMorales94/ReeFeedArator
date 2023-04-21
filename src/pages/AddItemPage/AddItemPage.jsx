import React, { useState } from "react";
import { create } from "../../utilities/items-api";


export default function AddItemPage({setItems, items}) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  

  const handleNameChange = (e) => {
     setName(e.target.value)
  }
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
 }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name,
      quantity,
    }
    
    try {
      console.log(name)
      console.log(quantity)
      console.log(newItem)
      const createdItem = await create(newItem)
      console.log(createdItem)
      setItems([...items, {name: name, quantity: quantity, id: createdItem._id }])
    } catch (error){
    
    }
    setName("");
    setQuantity(0);
  };
      

  return (
    <>
      <h1>Add a Grocery List Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item:
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            name="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};
    

    
   




