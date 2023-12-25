import React from 'react';
import service from './Image/Service.jpg';
import Footer from "../footer/Footer";
import "./Service.css";
//import Cards from './Cards';
import Cards from '../card/Cards';
function Services()
{
    return(
        <>
        <div className="hero">
       <img src={service} className="vsize" alt="Missing"/>
       <div className="textdiv">
       <h1>SERVICE</h1>
       </div>
       </div>
        <Cards/>
        <Footer/>
        </>
    )
}
export default Services;