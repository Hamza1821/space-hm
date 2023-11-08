import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home'
import Apod from './components/Apod'
import Gallery from './components/ImageGallery'



const App = () => {
  return (
    <div className='body'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/apod' element={<Apod/>}></Route> 
          <Route path='/gallery' element={<Gallery/>}></Route> 
         
    
        </Routes>
      </Router>

    </div>
  )
}

export default App
