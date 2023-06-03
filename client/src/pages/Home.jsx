import React from 'react'
import "../css/Home.css"
import Player from "../pages/Player"
import PlayersBundle from './PlayersBundle'
import NftBundle from './NftBundle'
import player from "../images/kick.png"
import CreateNft from './CreateNft'


const Home = () => {
  return (
    <div className="container">
      <div className='main'>
      <div className="inner1">
      <h1  style={{color:'white'}}>KridIn</h1>
      <h2 style={{color:'white'}}>Empowering Next Generation Players</h2>
      <div className="contain">
        <div className="box">
        <h2 style={{color:'white'}}>9,87,345</h2>
        </div>
        <div className="box">
        <h2 style={{color:'white'}}>4,95,813</h2>
        </div>
        <div className="box">
        <h2 style={{color:'white'}}>4,51,278</h2>
        </div>
      </div>
      </div>
      </div>
      <div className="inner2">
        <img src={player} alt="" className="image" />
         <div className="info">
         <h1 id="logo">KRIDIN PROJECT UPDATES</h1>
         <p>A destination for players to get investor by showcasing their talent.We offer all the transactions in form of NFT and it is based on Blockchain technology.</p>
         </div>
      </div>
      
      <div className="featuredNft">
        <h1 >Most trending NFTs of all time</h1>
        <NftBundle/>
      </div>
      <div className="featuredPlayers">
        <h1>Featured Players</h1>
        <PlayersBundle/>
      </div>
         
      
    </div>
  )
}

export default Home