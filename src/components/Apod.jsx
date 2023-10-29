import React, { useState, useEffect } from 'react';
import { dataToday, dataByDate } from '../ApiCall/apod.js';
import '../styles/apod.css'
import {Link} from 'react-router-dom'
import Header from './header2.jsx';

const Apod = () => {
  const [data, setData] = useState({});
   

  const searched=async()=>{
    const btn=document.getElementById('asodb')
    const inpt=btn.previousElementSibling;
    const byDate= await dataByDate(inpt.value)
    setData(byDate)
  }

  const getImage=async(url)=>{
   try {
    const img=await fetch(url)
    return img
   } catch (error) {
    console.log("img error")
   }
  }

  const fetchData = async () => {
    try {
      const today = await dataToday();
      setData(today);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }; 
  useEffect(() => {
    

    fetchData();
  }, []);
  const handleDownload = (url, title) => {
    console.log(url)
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
      <div className='body2'>
      <div className="container">
        <h1 className='apodh1'>Astronomy Picture of the Day</h1>
        <div className="bydate">
          <h1 className="bdh">Search by date</h1>
          <div className='apodR'>
            <input type="text" placeholder="write in YYYY_MM_DD format" name="date" />
            <button className="searcgBtn"
            id='asodb' onClick={()=>{searched()}}>search</button>
            <div className="refresh">
          
           <button type="submit" className="refreshBtn" onClick={()=>{fetchData()}}>Today's APOD</button>
        
      </div>
          </div>
        </div>

           {data.media_type=='image'?(<div className="today">
          <div className='sec'>
            <img className="img" src={data.url} alt="" onClick={() => handleClicked(data.hdurl,data.title)} />
            <button className='download' onClick={() => handleClicked(data.hdurl,data.title)}>View</button>
          </div>
          <div className="info">
            <h1 className="t-title">{data.title}</h1>
            <p className="t-ex">{data.explanation}</p>
            <p className="t-date">{data.date}</p>
            <h6 className="t-copyright">{data.copyright}</h6>
          </div>
        </div>):(<div className="todayVideo">
          <div className='sec'>
            <iframe src={data.url} className='vdo' frameborder="0"></iframe>
           
          </div>
          <div className="info">
            <h1 className="t-title">{data.title}</h1>
            <p className="t-ex">{data.explanation}</p>
            <p className="t-date">{data.date}</p>
            <h6 className="t-copyright">{data.copyright}</h6>
          </div>
        </div>)}

        <div className="APODinfo">
          <h1>What is APOD</h1>
           <h3>
Astronomy Picture of the Day, featured on Astro Hub, offers a captivating glimpse into the vastness of space. Each day, this platform showcases mesmerizing astronomical images, enlightening viewers about the mysteries of the universe. From distant galaxies to stunning nebulae, Astro Hub's Astronomy Picture of the Day takes you on a visual journey through space and time. Whether you're a seasoned astronomer or a curious novice, this daily dose of celestial beauty is sure to inspire and educate. Explore the cosmos effortlessly with Astro Hub and dive into the wonders of the universe today!</h3>
<p>Discover the wonders of the cosmos through Astronomy Picture of the Day on Astro Hub. Immerse yourself in breathtaking celestial images and expand your knowledge of the universe. Explore the cosmos like never before!</p>

        </div>

        
      </div>
    </div>
   
   </>
  );
}

export default Apod;
