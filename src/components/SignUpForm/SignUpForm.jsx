import React, { useState } from 'react';
import { signUp } from '../../utilities/users-service';


export default function SignUpForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const user = await signUp(data);
      props.setUser(user);
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value, error: '' });
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <br />
          <label>Email </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <br />
          <label>Password </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <br />
          <label>Confirm </label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <br />
          <button type="submit" disabled={disable}>Sign up</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}






