import React from 'react'
import '../styles/face.css'


import img from  '../media/satellite.png'
import {Link} from 'react-router-dom'
import NASAImageGallery from './ImageGallery'
const Front = () => {
React.useEffect(() => {
        const textTag = document.getElementById("space");
        const textE = textTag.innerText;
        let idx = 0;
        const speed = 400;
        const size = textE.length;
        console.log(size);
    
        async function write() {
          textTag.innerText = textE.slice(0, idx);
          idx++;
    
          if (idx <= size) {
            setTimeout(write, speed);
          }
        }
    
        write();
      }, []);


  return (
    <div className='body1'>
      <main>
        <div id="textSpace">
          <p class="space" id="space">SpaceHM</p>
          <img className='sattellite' src={img} alt="" />
        </div>

        
        <div class="asod" id='asod'>
            <h1 class="asodh1">Astronomy Picture of Day</h1>
            <div class="asodcontnt">
                
                <div class="asodp">The "NASA Image Gallery" presents a stunning collection of space visuals, showcasing the cosmos in all its glory. Explore the universe through captivating images and photographs. </div></div>
                <Link to='/apod'>
  <button type="submit" className="asodbtn">SEE NOW!</button>
</Link>
        </div>

     <div class="gallery" id='gallery'>
            <h1 class="galleryh1" >Image Gallery</h1>
            <div class="gallerycontnt">
                
                <div class="galleryp">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </div></div>
                <Link to='/gallery'>
  <button type="submit" className="galleryb">SEE NOW!</button>
</Link></div>
  
      
      
        
        
    </main>
    <script src="./scripts/home.js"></script>
    </div>
  )
}

export default Front
