import './App.css';
import {createBrowserRouter,RouterProvider, Outlet  } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import User from './pages/UserProfile';
import UserProfile from './pages/UserProfile';
import { useStateValue } from './StateProvider';
import {getAllNFTs, isWalletConnected } from './Blockchain.services';
import { useEffect } from 'react';


function App() {

  

  const[{user},dispatch]=useStateValue();

  const router=createBrowserRouter([
    {path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/userProf",
      element:<UserProfile/>
    }
    
  ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/:id",
    element:<User/>
  }
  ])

 

  return (
  
    <>
    <div className='app'>
    <div className='container'>
    <RouterProvider router={router}/>
      
    </div>
    </div>
    </>
  

  );
}
const Layout=()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


export default App;
