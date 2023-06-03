import React, { useEffect, useState } from 'react'
import Identicon from 'react-identicons';
import {useNavigate} from "react-router-dom"
import "../css/UserProf.css"
import profilepic from "../images/profile.jpg"
import nft from "../images/nft.jpg"
import {useStateValue} from "../StateProvider"
import Post from "../pages/Post"
import db from "../firebase"
import CreateNft from './CreateNft'
import ShowNft from './ShowNft';
import { connectWallet } from '../Blockchain.services';
//import firebase from "firebase"


const UserProfile = () => {

  const navigate=useNavigate();

  const [{user},dispatch]=useStateValue();
  const [posts,setPosts]=useState([]);
  const [isShown,setIsShown]=useState(false);
  const [shown,setShown]=useState(false);
  const [image,setImage]=useState("")

  useEffect(()=>{
    try {
      db.collection('posts').where('username','==', "" || user.displayName ).onSnapshot(snapshot=>(
        setPosts(snapshot.docs.map(doc=>({
          id: doc.id,
          data:doc.data()
        }))) 
      ))
    } catch (error) {
      alert("You don't have an Account!")
      navigate("/login");
      
    }
  },[])

  const handleSubmit=(e)=>{
  e.preventDefault()

    db.collection('posts').add({
      profilepic:image,
      username:user.displayName,
      //timestamp:firebase.firestore.fieldValue.serverTimestamp()
    })
    setImage("");
  }

  const closeChild=()=>{
    setIsShown(false)
    setShown(false)
  }
  const handleClick = event => {
    setIsShown(true);
  };

  const buyNFT=()=>{
      setShown(true);
  }

  return (
    <>
    {!user?(<div className="UP">
    
    <div className="item1">
      <img src={profilepic} alt="" className="profile" />
      <h5>Name:Lionel Messi</h5>
    <h5>Age:35 years</h5>
    <h5>Email:messilionel@gmail.com</h5>
    <h5>Sport: Football</h5>
    <h5>University:Bharati Vidyapeeth</h5>
    <h4>About:</h4>
    <h5>Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi,
       is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. </h5>
    </div>
    
    <div className="item2">
    
    <div className="UP">
    <img src={nft} alt="" className="nftU" />
    <div><Identicon string={"0x21.....f890fdas"} size={50}/></div>
    <button className="uploadimg">Url</button>
    <button className='invest chan'>Invest Now</button>
    </div>
    <div className="images">
      <div className="UP">
        
      <h4>Images And Videos</h4>
      <input value={image} 
        onChange={(e)=>setImage(e.target.value)}
        className='imageUrl'
        placeholder='Upload the image'/>
      <button className='chan' type="submit" >Upload Image</button>
      </div>
      <div className="UP">
        <img src={profilepic} alt="" className="profile1" />
        <img src={profilepic} alt="" className="profile1" />
        <img src={profilepic} alt="" className="profile1" />
        
      </div>
    </div>
    </div> 
    
    </div>):(<div className="UP">
      
    {isShown && <CreateNft onClose={closeChild} />}
    {shown && <ShowNft onClose={closeChild} />}
    
    <div className="item1">
      <img src={user.photoUrl} alt="" className="profile" />
      <h5>Name:{user.displayName}</h5>
    <h5>Age:35 years</h5>
    <h5>Email:{user.email}</h5>
    <h5>Sport: Football</h5>
    <h5>University:Bharati Vidyapeeth</h5>
    <h4>About:</h4>
    <h5>Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi,
       is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. </h5>
    </div>
    
    <div className="item2">
    
    <div className="UP">
    <div>
    <img src={nft} onClick={buyNFT} alt="" className="nftU" />
    <div className="UP">
    <Identicon string={"0x21.....f890fdas"} size={25} />
    <p>0x21.....f890fdas</p>
    <small>@You</small></div></div>
    <button className="uploadimg" onClick={handleClick}>Url</button>
    <button className='invest chan' onClick={buyNFT}>Invest Now</button>
    <button className="invest chan" onClick={connectWallet}>Connect Wallet</button>
    </div>
    <div className="images">
      <div className="UP">
        
      <h4>Images And Videos</h4>
      <input value={image} 
        onChange={(e)=>setImage(e.target.value)}
        className='imageUrl'
        placeholder='Upload the image'/>
      <button className='chan' type="submit" onClick={handleSubmit}>Upload Image</button>
      </div>
      
      <div className="UP">
        {posts.map(post=>(
          <Post
          key={post.data.id}
          image={post.data.profilepic}
          timestamp={post.data.timestamp}
         />
        ))}
      </div>
    </div>
    </div> 
    
    </div>)}
    </>
    
  )
}

export default UserProfile