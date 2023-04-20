import React, { useState } from "react";
import { create } from "../../utilities/items-api";
import * as itemAPI from "../../utilities/items-api"

export default function GroceryListForm() {

  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  // useEffect(function() {
  //   async function getItems() {
  //     const item = await itemAPI.getAll();
  //     setGroceryList(item);
  //   }
  //   getItems();
  // }, [groceryList]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setGroceryList( { name: item, quantity: quantity });
    try {
      console.log(item)
      console.log(quantity)
      console.log(groceryList)
      await itemAPI.create(groceryList)
    } catch (error){
    
    }
    setItem("");
    setQuantity("");
  };
    

    
   


  return (
    <>
      <h1>Add a Grocery List Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item:
          <input
            name="item"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};


// create a form 