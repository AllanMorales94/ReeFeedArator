import { useState } from 'react'
import './App.css'
import FoodListPage from '../FoodListPage/FoodListPage'
import AddItemPage from '../AddItemPage/AddItemPage'
import AuthPage from '../AuthPage/AuthPage'
import GroceryListPage from '../GroceryListPage/GroceryListPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';

export default function App() {

  const [user, setUser] = useState(getUser())
  const [items, setItems] = useState([])

  function addItem(item) {
    setItems(items => [...items, item]);
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
            <Route path="/foodlistpage" element={<FoodListPage />} />
            <Route path="/addnewitempage" element={<AddItemPage addItem={addItem} />} />
            <Route path="/grocerylistpage" element={<GroceryListPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}