// src/components/LoginForm/LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch (e) {
      console.error(e);
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <h1>Welcome to ReFeedArator,  ReFeedMe because a well stocked fridge is a happy fridge.</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email </label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required /> <br />
          <label>Password </label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required /> <br />
          <button type="submit">Log in</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}