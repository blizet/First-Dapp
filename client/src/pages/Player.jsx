import React from 'react'
import "../css/Player.css"

const Player = ({image,profilePic,descp}) => {
  return (
    <div>
        <div className="cover" style={{backgroundImage:{image}}}>
            <img id='cover' src={profilePic} alt="" />
            <p>{descp}</p>
        </div>
    </div>
  )
}

export default Player