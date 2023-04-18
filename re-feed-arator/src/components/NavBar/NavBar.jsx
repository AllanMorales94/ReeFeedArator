import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, updateUser}) {

  function handleLogOut(){
    userService.logOut()
    updateUser(null)
  }

  return (
    <nav>
      <h2>Welcome, {user.name}</h2>
      <button><Link to="/foodlist">List</Link></button>
      &nbsp; | &nbsp;
      <button><Link to="/shoppinglist">Shopping List</Link></button>
      &nbsp; | &nbsp;
      <button><Link to="/profile">Profile</Link></button>
      &nbsp; | &nbsp;
      <button><Link to="/addnewitem">Add Item</Link></button>
      &nbsp; | &nbsp;
      <button><Link to='' onClick={handleLogOut}>Log Out</Link></button>
    </nav>
  )
}

