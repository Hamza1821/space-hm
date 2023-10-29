import React from 'react'
import '../styles/home.css'
import {HashLink} from 'react-router-hash-link'


const header = () => {
  return (
    <>
    <div className='navbar'>
   
        <div class="favicon navChild">logo here</div>
        <div class="nav navChild">
        <HashLink
         to='/#asod' className='link'>Astronomy Picture of Day</HashLink
        >
          <HashLink
           to='/#gallery' className='link'>Nasa Image Gallery</HashLink
          >
        </div>
   
    </div>
      
    </>
  )
}

export default header
