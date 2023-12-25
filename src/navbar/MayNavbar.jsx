import React,{ useState,useEffect } from "react";
import {useLocation} from "react-router-dom";
export const MayNavbar=({children})=>{
    const location=useLocation()
    const [showNav,setShowNav]=useState(false)
    useEffect(()=>{
        if(location.pathname==='/signin'){
            setShowNav(false)
        }
        else{
            setShowNav(true)
        }
    },[location])
    return(
        <>
        <div>{showNav && children}</div>
        </>
    )
}