import { useState } from 'react'
import './App.css'
import FoodListPage from '../FoodListPage/FoodListPage'
import AddItemPage from '../../components/AddItemPage/AddItemPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
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
            <Route path="/foodlist" element={<FoodListPage />} />
            <Route path="/addnewitem" element={<AddItemPage addItem={addItem} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}