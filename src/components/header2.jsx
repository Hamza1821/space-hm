import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <>
    <div className='navbar'>
   
        <div class="favicon navChild">logo here</div>
        <div class="nav navChild">
        <Link to='/' className='link'>Home</Link>
          <Link to='/apod' className='link'>Astronomy Picture of Day</Link>
          <Link to='/gallery' className='link'>Nasa Image Gallery</Link>
        </div>
   
    </div>
      
    </>
  )
}

export default header
