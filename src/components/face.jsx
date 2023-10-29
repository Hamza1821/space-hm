import React from 'react'
import '../styles/face.css'

const face = () => {
  return (
    <div className='body'>
       
        <video controls width="640" height="360">
        <source src="./space1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}


export default face
