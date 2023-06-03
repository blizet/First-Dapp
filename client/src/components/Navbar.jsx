import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"
import { useStateValue } from '../StateProvider'
import userpic from "../images/profile.jpg"

const Navbar = () => {
  
  const [{user},dispatch]=useStateValue();
  return (
    <div>
      <div className="nav">
        <h1 id='logo'>Logo</h1>
      <div className="navbar" >
      <input className='search' type="text" placeholder='search'/>
      <Link className='links' to="/">Home</Link>
      <Link className='links' to="/login">Login</Link>
      <Link className='links' to="/register">Register</Link>
      <Link className='links' to="/:id" style={{"align-items":"right"}}><img src="" alt="" />User</Link>
      {!user?(<Link className='links' to="/userProf" ><img className='userpic' src={userpic} alt="User" /></Link>):(<Link className='links' to="/userProf"><img className='userpic' src={user.photoURL} alt="User" /></Link>)}
      </div>
      </div>
    </div>

  )
}

export default Navbar