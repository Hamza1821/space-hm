import React from 'react'
import '../styles/home.css'
import logo from '../assets/hm.png'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='navbar'>
   
        <div className="favicon navChild"><img src={logo} className='logo' /></div>
        <div className="nav navChild">
        <Link to='/' className='link'>Home</Link>
          <Link to='/apod' className='link'>APOD</Link>
          <Link to='/gallery' className='link'>Image Gallery</Link>
        </div>
   
    </div>
      
    </>
  )
}

export default Header
