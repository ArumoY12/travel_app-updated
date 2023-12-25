import React from 'react'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"
const Footer=()=>{
    return(
        <div className='footer'>
            <div className='footertop'>
            <div>
            <h5>gOHigh<FlightTakeoffIcon className="navbar-icon"/></h5>
            <p>Choose your dream destination</p>
            </div>
            <div>
                <a href='/'>
                <i><FacebookIcon fontSize='small'/></i>
                <i><InstagramIcon fontSize='small'/></i> 
                <i className="bi bi-twitter-x"></i>
                </a>
            </div>
            </div>

            <div className='footerbottom'>
                <div>
                    <h6>Project</h6>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h6>Community</h6>
                    <a href='/'>GitHub</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>X</a>
                </div>
                <div>
                    <h6>Help</h6>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact Us</a>
                </div>
                <div>
                    <h6>Others</h6>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;