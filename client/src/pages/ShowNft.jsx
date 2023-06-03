import React, { useState } from 'react'
import Identicon from "react-identicons"
import "../css/CreateNft.css"
import close from "../images/close.png"
import "../css/UserProf.css"
import kick from "../images/kick.png"
import UpdateNft from "./updateNft"


const ShowNft = (props) => {

  const[isShown,setIsShown]=useState(false)

  const closeChild=()=>{
    setIsShown(false)
    
  }
  const handleClick = event => {
    setIsShown(true);
    
  };

  


  return (
    
    <div className="fixed_top">
      {isShown && <UpdateNft onClose={closeChild}/>}
      <button className='close' onClick={props.onClose}><img id='close' src={close} alt="" /></button>
        <h1>Buy Nft</h1>
        
          
          <img src={ kick} alt="" className="hero" />
          
          
        <h1 style={{color:"white"}}>Title</h1>
        <p style={{color:"white"}}>Lorem ipsum Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Dicta impedit harum dignissimos quasi unde suscipit odio repellendus dolor laborum accusantium ex autem 
         nam tenetur, eum maxime fugiat molestias, reprehenderit saepe?</p>
         <div className="text flex ">
         <Identicon string="0fadsf.....324jfd" size={50}/>
         <h4 style={{color:"white"}}>0fadsf.....324jfd</h4>
         <small style={{color:"white"}}>@You</small>
         </div>
         <h4>Current price</h4>
         <small>0.035 ETH</small>
        <div className="flex">
        <div id="chunk">
        <button type='submit'  className='chunk' >Purchase Now</button>
        <button type='submit' onClick={handleClick}  className='chunk' >Change Price</button>
        </div>
        </div>
       
    </div>
  )
}

export default ShowNft