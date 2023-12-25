import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './homePage/Home';
import About from './aboutPage/About';
import Services from './servicePage/Services';
import { Signinup } from './signLoginPage/SignUp';
import { Route, Routes } from 'react-router-dom';
import Contact from './contactPage/Contact';
import { MayNavbar } from './navbar/MayNavbar';
const Travel=()=>{
return(
   <>
   <MayNavbar>
   <Navbar/>
   </MayNavbar>
   <Routes>
   <Route path='/'element={<Home cname="hero" divtext="textdiv"/>} ></Route>
   <Route path='/about' element={<About cname="hero" divtext="textdiv"/>}></Route>
   <Route path='/service' element={<Services cname="hero" divtext="textdiv"/>}></Route>
   <Route path='/contact' element={<Contact cname="hero" divtext="textdiv"/>}></Route>
   <Route path='/signin' element={<Signinup cname="hero" divtext="textdiv"/>}></Route>
   </Routes>
   </>
)
}
export default Travel;