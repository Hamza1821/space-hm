import React from 'react'
import '../styles/face.css'


import img from  '../media/satellite.png'
import {Link} from 'react-router-dom'
import NASAImageGallery from './ImageGallery'
const Front = () => {



  return (
    <div className='body1'>
     
    <h1 className='hdng'>SPACEHM</h1>
    <div className="content">
      <div className="apod cc">
        <div className="cch ccc">Astronomy Picture Of the Day</div>
        <div className="ccd ccc">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </div>
        <div className="ccb ccc"><Link to='/apod'  className='linkh'>SEE NOW!</Link></div>
      </div>
      <div className="image cc ">
      <div className="cch ccc">IMAGE  GALLERY</div>
        <div className="ccd ccc">The "NASA Image Gallery" presents a stunning collection of space visuals, showcasing the cosmos in all its glory. Explore the universe through captivating images and photographs. </div>
        <div className="ccb ccc"><Link to='/gallery' className='linkh' >SEE NOW!</Link></div>
      </div>
    </div>
    </div>
  )
}

export default Front
