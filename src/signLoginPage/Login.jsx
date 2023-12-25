import React, { useState } from "react";
import './Signin&Login.css';
import axios from "axios";
export const Login=()=>{
    const[formData,setFormData]=useState({
        Email:"",
        Password:""
    })
    const[error,setError]=useState({})
    const[valid,setValid]=useState(true)
    const submitFun=(e)=>{
        e.preventDefault();
        let isValid=true;
        let validationError={}
            if(formData.Email==="" || formData.Email===null){
                isValid=false
                validationError.Email="Please enter your email";
            }
            else if(!/\S+@\S+\.\S+/.test(formData.Email))            {
                isValid=false
                validationError.Email="Please enter valid email";
            }
            if(formData.Password==="" || formData.Password===null|| formData.Password.length<=6){
                isValid=false
                validationError.Password="Check password";
            }
            setValid(isValid);
            setError(validationError);
            if(Object.keys(validationError).length===0)
            {
                axios.get("http://localhost:8000/users").then((Response)=>{
                    Response.data.map((user)=>{
                        if(user.Email===formData.Email){
                            if(user.Password===formData.Password){
                                alert("logged in sucessfully")
                                setFormData({
                                    Email:"",
                                    Password:""
                                })
                            }
                        }
                    })
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    return(
        <>
        <div className="inputs">        
         <div className={error.Email==="Please enter your email" || error.Email==="Please enter valid email"?"input wrong":"input"}>
            <img src="" alt=""/>
            <input type="email" value={formData.Email} placeholder="enter your email" autoSave="off" onChange={(e)=>{setFormData({...formData,Email:e.target.value})}}/>
            <label className="Label"><h6>{error.Email}</h6></label>
        </div>
         <div className={error.Password==="Wrong password"?"input wrong":"input"}>
            <img src="" alt=""/>
            <input type="password" value={formData.Password} placeholder="enter password" autoSave="off" onChange={(e)=>{setFormData({...formData,Password:e.target.value})}}/>
            <label className="Label"><h6>{error.Password}</h6></label>
        </div>
        </div>
        <div className="forget_password">forget password?<span>Click here</span></div>
        {/* {Action==="Sign Up"?<button className="btn" onClick={submitFun}>sign in</button>:<div></div>} */}
        <button className="btn" onClick={submitFun}>log in</button>
        </>
    )
}