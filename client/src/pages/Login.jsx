import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {auth, provider } from "../firebase.js"
import "../css/Login.css"
//import {signInWithEmailAndPassword} from "firebase/auth"
import { actionTypes } from '../reducer.js'
import {useStateValue} from "../StateProvider.js"

const Login = () => {
  let navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const[state,dispatch]=useStateValue();

  //const logIn=(e)=>{
    //e.preventDefault()
    //signInWithEmailAndPassword(auth,email,password)
    //.then((userCredentials)=>{
     // console.log(userCredentials)
    //}).catch((error)=>{
     // console.log(error)
    //})
  //}
  
  const signIn=()=>{
    auth.signInWithPopup(provider)
    .then((result)=>{
      alert("User logged in");
      dispatch({
        type:actionTypes.SET_USER,
        user: result.user,
      })
      
      
      console.log(result.user);
      
    })
    .catch((error) =>alert(error.message));
    navigate("/");
  }
  return (
    <>
    <div className="Login">
    
    
    <form >
      <h1>Login</h1>
      <input className='inputfield' type="email" 
      placeholder='email' 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/><br/>
      <input className='inputfield' type="password"
       value={password}
        placeholder='password' 
        onChange={(e)=>setPassword(e.target.value)}/><br/>
      
      <button className='buttondeco' type='submit'>Log In</button>
      <p>Don't have an account?<Link to="/register">Register</Link></p><br/>
      
    </form>
    <button className='buttondeco' type="submit" onClick={signIn}>Sign In with Google</button>
    </div>
    </>
  )
}

export default Login