import React from 'react'
import "../css/Post.css"

const Post = ({image,message,timestamp}) => {
  return (
    <div className="Post">
       <div className="post_img">
         <img id='post_img' src={image} alt="" />
       </div>
       
       {//{new Date(timestamp?.toDate()).toUTCString()}
       }
       <p>timestamp...</p>
    </div>
  )
}

export default Post