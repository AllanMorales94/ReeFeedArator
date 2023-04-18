import { useState } from 'react'
import './App.css'
import ProfilePage from '../ProfilePage/ProfilePage'
import FoodListPage from '../FoodListPage/FoodListPage'
import ShoppingListPage from '../ShoppingListPage/ShoppingListPage'
import AddItemPage from '../AddItemPage/AddItemPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';

export default function App() {

  const [user, setUser] = useState(getUser())

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>

            <Route path="/shoppinglist/" element={<ShoppingListPage />} />
            <Route path="/foodlist" element={<FoodListPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/addnewitem" element={<AddItemPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}