import React from 'react'
import "../css/UserProf.css"
import profilepic from "../images/profile.jpg"
import nft from "../images/nft.jpg"

const UserProfile = () => {
  return (
    <>
    <div>UserProfile</div>
    <div className="UP">
    
    <div className="item1">
      <img src={profilepic} alt="" className="profile" />
      <h5>Name:Lionel Messi</h5>
    <h5>Age:35 years</h5>
    <h5>Email:messilionel@gmail.com</h5>
    <h5>Sport: Football</h5>
    <h5>University:Bharati Vidyapeeth</h5>
    </div>
    
    <div className="item2">
    <h4>About:</h4>
    <h5>Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi,
       is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. </h5>
    <div className="UP">
    <img src={nft} alt="" className="nft" />
    <button>Invest Now</button>
    </div>
    <div className="images">
      <h4>Images And Videos</h4>
      <div className="UP">
        <img src={profilepic} alt="" className="profile1" />
        <img src={profilepic} alt="" className="profile1" />
        <img src={profilepic} alt="" className="profile1" />
        
      </div>
    </div>
    </div> 
    
    </div>
    </>
    
  )
}

export default UserProfile