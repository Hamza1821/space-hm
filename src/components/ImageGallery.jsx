import React, { useState, useEffect } from 'react';
import '../styles/gallery.css';
import Header from './header2';

function NASAImageGallery() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const apiKey = '67Nld4r1qQxQEJKZzDKvO6fIHAib1xg477clFIk8';

  useEffect(() => {
    const apiUrl = `https://images-api.nasa.gov/search?q=earth&media_type=image`;
    fetchMedia(apiUrl);
  }, []);

  const fetchMedia = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMedia(data.collection.items);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }

 

  const searchImage = async() => {
    const btn = document.getElementById('searchBtn');
    const inpt = btn.previousElementSibling;
    if(inpt.value=='' || inpt.value==null){
      inpt.value='earth'
    }
    const url = `https://images-api.nasa.gov/search?q=${inpt.value}&media_type=image`;
    setLoading(true)
     await fetchMedia(url);
  }

  const searchVdo = async() => {
    const btn = document.getElementById('searchBtn');
    const inpt = btn.previousElementSibling;
    if(inpt.value=='' || inpt.value==null){
      inpt.value='earth'
    }
    const url = `https://images-api.nasa.gov/search?q=${inpt.value}&media_type=image`;
     await fetchMedia(url);
  }
 
  const handleDownload = (url, title) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectURL;
        a.download = title;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(objectURL);
      })
      .catch((error) => console.error(error));
  };
  const handleClicked= (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    link.click();
  };

  return (
   <>
     <Header/>
     <div className='body3'>
     <span> <h1 className='heading'>NASA Image Gallery</h1></span>
      
      <div className="search">
        <input type="text" className='searchBar' placeholder='search..' />
        <button className='searchBtn' id='searchBtn' onClick={() => { searchImage() }}><i class="bi bi-search"></i></button>
      </div>
      {loading ? (
           <div className="color-changing-spinner"></div>
      ) : (
        <div className="image-gallery">
          {media.map((item, index) => {
            
            

            return (<div key={index} className="image-card">
              <h3 className='card-title'>{item.data[0].title}</h3>
               <img className='card-image' src={item.links[0].href} alt={item.data[0].title} onClick={() => handleClicked(item.links[0].href, item.data[0].title)}/>
               <button className='downloadimg' onClick={() => handleDownload(item.links[0].href, item.data[0].title)}><i class="bi bi-download"></i></button>


           
            
          </div>)
          }
            
          )}
        </div>
      )}
    </div>
   
   </>
  );
}

export default NASAImageGallery;
