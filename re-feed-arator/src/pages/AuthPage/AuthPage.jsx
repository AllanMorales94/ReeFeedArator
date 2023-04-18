import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react';

export default function AuthPage({setUser}) {
  const [signUp, setSignupForm] = useState(false);
  return (
    <main>
      <div>
      </div>
      {/* <h1>{signUp? "Sign Up" : "Log In"}</h1> */}
    {signUp ? <SignUpForm setUser={setUser}/>:<LoginForm setUser={setUser}/>}

        <button onClick={() => setSignupForm(!signUp)}>{signUp ? " Sign In" : "Sign Up"}
        </button>
      
   </main>
  )
}
      
