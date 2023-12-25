import React, { useEffect } from "react";
import video from './Image/video.mp4';
import './HomePage.css';
// import "./Trip.css"
import Trip from "../trip/Trip";
import Cards from "../card/Cards";
import Footer from "../footer/Footer";
const Home=()=>
{
  useEffect(()=>{document.title=`gohigh`;});
    return(
      <>
      <div className="hero">
      <video src={video} autoPlay muted loop type="video/mp4"  className="vsize" alt='video'>
       </video>
       <div className="textdiv">
       <h1>Your Dream Our Duty</h1>
       <p>Choose Your Dream Destination.</p>
       </div>
       </div>       
       <Trip/>
       <Cards/>
       <Footer/>
  </>     
    )
}
export default Home;