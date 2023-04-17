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
      <Link to="/foodlist/new">List</Link>
      &nbsp; | &nbsp;
      <Link to="/shoppinglist">Shopping List</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profile</Link>
      <h2>Welcome, {user.name}</h2>
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

