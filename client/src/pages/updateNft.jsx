import React, { useState } from 'react'
import "../css/CreateNft.css"
import close from "../images/close.png"
import "../css/UserProf.css"
import kick from "../images/kick.png"

const UpdateNft = (props) => {

  
  const [price,setPrice]=useState('');
  

  const handleSubmit=(e)=>{
     e.preventDefault()

    
     
     console.log("Changed info")
    
     props.onClose()
    
  }

 


  return (
    <div className="fixed_top">
      <button className='close' onClick={props.onClose}><img id='close' src={close} alt="" /></button>
        <h1>Update Nft</h1>
        <form onSubmit={handleSubmit} className='createNft'>
          
          <img src={ kick} alt="" className="hero" />
          <h4>Update Nft</h4>
          
            
            <input onChange={(e)=>setPrice(e.target.value)} name='price' type="number" placeholder='Price(Eth)' className="title" />
            
            <button type='submit'  className='invest chan' >Update Price</button>
        </form>
    </div>
  )
}

export default UpdateNft