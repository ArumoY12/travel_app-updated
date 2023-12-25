import React from 'react';
import "./Trip.css"
import TripData from './TripData';
const Trip=()=>{
    return(
        <div>
        <div className='destinations'>
        <h1>Recent Trip</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        </div>
        <TripData/>
        </div>
    )
}
export default Trip;