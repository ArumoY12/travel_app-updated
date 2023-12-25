import React from "react";
import about from './Image/about.jpg';
import './About.css';
import Footer from "../footer/Footer";
const About=()=>
{
    return(
      <>
       <div className="hero">
       <img src={about} className="vsize" alt="Missing"/>
       <div className="textdiv">
       <h1>ABOUT</h1>
       </div>
       </div>
       <div className="aboutfont">        
      <p> Welcome to the world of GoHigh Tourism, where adventure meets elegance, and exploration 
        reaches new heights. Our passion is to take you on unforgettable journeys to the most captivating 
        destinations, ensuring your travel experiences are nothing short of extraordinary.</p>

<h4>Our Story</h4>
<p>GoHigh Tourism was born out of a love for adventure and a desire to share the world's beauty with 
  fellow travelers. Established in 2005, we've grown into a leading name in the tourism industry, known for 
  our commitment to quality, safety, and sustainability.</p>

<h4>What We Offer</h4>
<p>At GoHigh Tourism, we offer a wide range of travel experiences. Whether you're an adrenaline junkie 
  seeking mountain treks, a culture enthusiast desiring authentic encounters, or a leisure traveler looking for 
  relaxation, we have the perfect package for you. Our expert guides and carefully crafted itineraries ensure you 
  get the most out of every trip.</p>

<h4>Why Choose Us</h4>
<p>What sets GoHigh Tourism apart is our unwavering dedication to responsible and sustainable travel. 
  We believe in leaving a positive impact on the places we visit. With us, you're not just a tourist; you're a 
  global citizen making a difference.</p>

<h4>Get Ready to Soar</h4>
<p>Join us on a journey of a lifetime with GoHigh Tourism. Let's elevate your travel experience and explore 
  the world together. Pack your bags and get ready to go high!</p>

<p>Discover more, experience more, and become a part of our adventure today.</p>
       </div>
<Footer/>
  </>     
    )
}
export default About;