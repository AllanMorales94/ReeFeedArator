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






// export default class SignUpForm extends Component {

//   // state is always an object with a property for each "piece" of state
//   state = {
//     name: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       // We don't want to send the 'error' or 'confirm' property,
//       //  so let's make a copy of the state object, then delete them
//       const formData = {...this.state}
//       delete formData.error;
//       delete formData.confirm;
//       const user = await signUp(formData)
//       this.props.setUser(user)
//     } catch {
//       this.setState({ error: 'Sign Up Failed - Try Again'})
//     }
//   }

//   handleChange = (evt) => {
//     this.setState({ [evt.target.name]: evt.target.value, error: '' })
//   }



//   render() {
//     const disable = this.state.password !== this.state.confirm;
//     return (
//       <div>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>Name </label>
//             <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//             <br />
//             <label>Email </label>
//             <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//             <br />
//             <label>Password </label>
//             <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//             <br />
//             <label>Confirm </label>
//             <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//             <br />
//             <button type="submit" disabled={disable}>Sign up</button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//     );
//   }

// }

