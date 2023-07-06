// import React from 'react'
import {useState} from "react";
import './Feedback.css'
import axios from "axios";
import Navigationbar from '../../Components/Navigationbar/Navigationbar'

function Feedback() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        feedback:""
      })
      
      function handleChange(event){
        const newuser={...user}
        newuser[event.target.id]=event.target.value
        setUser(newuser)
       // console.log(newuser);
      }
      
      function handleClick(event){
        event.preventDefault();
        axios.post("http://localhost:5000/feedback",{ value: user })
        .then(res=>{
          console.log(res)
          alert("Query Submitted "+user.name);
        })
        
      }
  return (
    <div className="contact-top contactcolor">
    <Navigationbar />
      <div className="form1 fluid-container ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form className="feedback" onSubmit={handleClick}>
              <div className="form-group">
              <h1 className="text-center improve">Help us Improve</h1>
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  value={user.name}
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
                <label>Your Feedback</label>
                <textarea
                  className="form-control"
                  id="feedback"
                  value={user.feedback}
                  name="feedback"
                  cols="100"
                  rows="5"
                  placeholder=" Feedback"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary feedback">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback