import React from 'react'
import "../css/Nft.css"
const Nft = ({link}) => {
  return (
    <>
    <div className="nft">
      <img src={link} alt="" id="nft" />
      <h4>NFT #nft</h4>
      <p style={{color:'aliceblue'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae
         quas voluptatum fuga natus ducimus nihil est id non debitis quaerat, 
        doloremque nesciunt in molestias. Qui vitae laudantium voluptatem mollitia?</p>
      <small>Current Price</small>
      <p>0.34 ETH</p>
      <button>View Details</button>
    </div>
    </>
  )
}

export default Nft