import React from 'react'
import {Link} from "react-router-dom"
import "../css/Login.css"


const Register = () => {
 
 
  return (
   <>
    <div className="Login">
    
    <form onSubmit>
      <h1>Register</h1>
      <input className='inputfield' type="text"  placeholder='Name'/><br/>
      <input className='inputfield' type="email" 
       
       placeholder='Email-id'
        /><br/>
      <input className='inputfield' type="text" placeholder='username' /><br/>
      <input className='inputfield' type="password"
       
        placeholder='password' 
        /><br/>
      <button className='buttondeco' type='submit'>Register</button><br/>
      <p>Already have an account?<Link to="/login">Login</Link></p><br/>
    </form>
    </div>
  </>
  )
}

export default Register