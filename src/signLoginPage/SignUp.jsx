import React, { useState } from "react";
import './Signin&Login.css';
import { Login } from "./Login";
import axios from 'axios';
export const Signinup=()=>{
    const[Action,setAction]=useState("Registration")
    const[formData,setFormData]=useState({
        Name:"",
        Email:"",
        Password:"",
        Cpassword:""
    })
    const[error,setError]=useState({})
    const[valid,setValid]=useState(true)
    const submitFun=(e)=>{
        e.preventDefault();
        let isValid=true;
        let validationError={}
            if(formData.Name==="" || formData.Name===null){
                isValid=false
                validationError.Name="Please enter your full name";
            }
            if(formData.Email==="" || formData.Email===null){
                isValid=false
                validationError.Email="Please enter your email";
            }
            else if(!/\S+@\S+\.\S+/.test(formData.Email))            {
                isValid=false
                validationError.Email="Please enter valid email";
            }
            if(formData.Password==="" || formData.Password===null){
                isValid=false
                validationError.Password="Wrong password";
            }
            else if(formData.Password.length<=6){
                isValid=false
                validationError.Password="Password less than 7";
            }
            if(formData.Password!==formData.Cpassword || formData.Cpassword===""){
                isValid=false
                validationError.Cpassword="Password doesn't match";
            }
            setValid(isValid);
            setError(validationError);
            if(Object.keys(validationError).length===0)
            {
                axios.post("http://localhost:8000/users",formData).then((Response)=>{
                    alert("registered sucessfully")
                    setFormData({
                        Name:"",
                        Email:"",
                        Password:"",
                        Cpassword:""
                    })
                }).catch((error)=>{
                    console.log(err)
                })
            }
        }
    return(
        <>
        <div className="container">
        {Action!=="Sign Up" && Action!=="Login"?
        <div className="submit_container">
            <div className={Action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={Action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>:<>
        <div className="header">
        <div className="text">{Action}</div> 
        <div className="underline"></div>
        </div>
        {Action==="Login"?<Login/>:
        <div className="inputs">
        <div className={error.Name==="Please enter your full name"?"input wrong":"input"}>
            <img src="" alt=""/>
            <input type="text" value={formData.Name} placeholder="enter full name" onChange={(e)=>{setFormData({...formData,Name:e.target.value})}}/>
            <label className="Label"><h6>{error.Name}</h6></label>
        </div>       
         <div className={error.Email==="Please enter your email" || error.Email==="Please enter valid email"?"input wrong":"input"}>
            <img src="" alt=""/>
            <input type="email" value={formData.Email} placeholder="enter email" autoSave="off" onChange={(e)=>{setFormData({...formData,Email:e.target.value})}}/>
            <label className="Label"><h6>{error.Email}</h6></label>
        </div>
         <div className={error.Password==="Wrong password"?"input wrong":"input"}>
            <img src="" alt=""/>
            <input type="password" value={formData.Password} placeholder="enter password" autoSave="off" onChange={(e)=>{setFormData({...formData,Password:e.target.value})}}/>
            <label className="Label"><h6>{error.Password}</h6></label>
        </div>
         <div className={error.Cpassword==="Password doesn't match"|| error.Cpassword===""?"input wrong":"input"}>
            <img src="" alt=""/>
            <input type="password" value={formData.Cpassword} placeholder="confirm password" autoSave="off" onChange={(e)=>{setFormData({...formData,Cpassword:e.target.value})}}/>
            <label className="Label"><h6>{error.Cpassword}</h6></label>
        </div>
        </div>}
        {Action==="Sign Up"?<button className="btn" onClick={submitFun}>sign in</button>:<div></div>}
        </>
          }
        </div>
        </>
    )
}