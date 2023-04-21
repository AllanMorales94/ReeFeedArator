import { useState } from 'react'
import './App.css'
import AddItemPage from '../AddItemPage/AddItemPage'
import AuthPage from '../AuthPage/AuthPage'
import GroceryListPage from '../GroceryListPage/GroceryListPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import { deleteItem } from '../../utilities/items-api'

export default function App() {

  const [user, setUser] = useState(getUser())
  const [items, setItems] = useState([])
  



  

  function addItem(item) {
    setItems(items => [...items, item]);
  }

  function handleDelete(id) {
    console.log(id)
    deleteItem({id:id})
  }

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/addnewitempage" element={<AddItemPage setItems={setItems} items={items} addItem={addItem} />} />
            <Route path="/grocerylistpage" element={<GroceryListPage  items={items} handleDelete={handleDelete} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}




