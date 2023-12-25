import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import "bootstrap/dist/js/bootstrap.min.js"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
function Navbar()
{
    return(
        <>
        <div className='container-fluid nav_bg'>
          <div className='row'>
          <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* //<NavLink className="navbar-brand"><FlightTakeoffIcon/>A.D</NavLink> */}
         <h5>gOHigh<FlightTakeoffIcon className="navbar-brand"/></h5>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <button style={{backgroundColor:"skyblue", borderRadius:"50px",fontSize:10}}>
                <NavLink className="nav-link" to="/signin">Book Now</NavLink>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
  </div>
  </>)}

//   <ul class="nav nav-pills ">
//   <li class="nav-item">
//     <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
//   </li>
//   <li class="nav-item">
//     <NavLink class="nav-link" to="/about">About</NavLink>
//   </li>
//   <li class="nav-item">
//     <NavLink class="nav-link" to="/contact">Contact</NavLink>
//   </li>
//   <li class="nav-item">
//     <NavLink class="nav-link disabled" aria-disabled="true">Disabled</NavLink>
//   </li>
// </ul>
//       </>
//     )
// } 
export default Navbar;
