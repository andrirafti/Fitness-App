import { useState } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

const Validator = () => {
  const [username, setUsername] = useState('')
  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [results,setResults]=useState('Welcome, Please Sign Up Or Log In!')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length >= 1 && password.length < 7 || password2.length > 1 && password.length < 7) {
      setResults("Password must be 7 letters with special char")
    }
    else if (password2 !== password) {
      setResults("ERROR: Passwords do not match")
    }
    else if (password === '' || password2 === '') {
      setResults("Password Field empty")
    }
    else if (password2 === password) {
      setResults(<div><h1>Thank you for signing up, {username}</h1>
        <h2>Time to start your fitness journey! </h2>
        <p>Please Click On Add Routine to add your own Personal routines</p>
        <p>Or Click on the Public folder for our users routines!</p>
      </div>)
    }
}


  return (
    
    <div id="signup">

      <Link id="ll2" to="/forum">Motivation Forum!</Link>
      <Link to='/admin'>Admin Login</Link>
      <h3>{results}</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <label>UserName:</label>
          <input required type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <label>Email</label>
          <input required type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input required type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input required type="password" placeholder="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
          </div>
        <button> Sign Up </button>

      </form>
      
      
    </div>
  )
}

export default Validator