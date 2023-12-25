import React, { useState } from "react";
import "./Contact.css"
import axios from 'axios'
const Contact=()=>
{
    const[data,setdata]=useState(
       {fName:"",
        Email:"",
        Subject:"",
        Message:"",
        });
    const[alldata,setAlldata]=useState()
    const inputevent=(events)=>{
    const val=events.target.value;
    const naam=events.target.name;
    
    setdata((preval)=>{
        return{
            ...preval,
            [naam]: val,
        }
    })
}
    const formSubmit=(event)=>{
    event.preventDefault();
    if((data.fName) && (data.Email) && (data.Message) && (data.Subject)) {
    axios.post("http://localhost:8000/contacts",data).then((Response)=>{
                    alert("Saved")
                    setdata({
                        fName:"",
                        Email:"",
                        Subject:"",
                        Message:"",
                    })
                }).catch((error)=>{
                    console.log(err)
                })
    }
    else{
        alert("Please Enter valid data")
    }
}
    return(
        <>
       <div className="contact">
        <form onSubmit={formSubmit}>
        <input type="text" onChange={inputevent} required autoComplete="off" autoFocus="on" name="fName" value={data.fName} placeholder="Enter your name.."/>
        <input type="text" onChange={inputevent} autoComplete="off" name="Email" value={data.Email} placeholder="Enter your email"/>
        <input type="text" onChange={inputevent} autoComplete="off" name="Subject" value={data.Subject} placeholder="Enter your subject"/>
        <textarea type="text" onChange={inputevent} autoComplete="off" name="Message" value={data.Message} placeholder="Message us"/>
        <button className="botn">Submit</button>
        </form>
        </div>
        </>
    )
}
export default Contact;