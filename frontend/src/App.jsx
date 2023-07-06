import FlightBooking from "../src/Pages/FlightBooking/FlightBooking";
import HotelBooking from "../src/Pages/HotelBooking/HotelBooking";
import Team from "../src/Pages/Team/Team";
import Home from "../src/Pages/Home/Home";
import Place from "../src/Pages/Home1/Place";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AskOurExperts from './Pages/AskOurExperts/AskOurExperts';
import { Navigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
import Profile from "../src/Pages/Profile/Profile";
import Login from "../src/Pages/Login/Login";
import Signup from "../src/Pages/Signup/Signup";
import Feedback from "../src/Pages/Feedback/Feedback";
//import data from "../../backend/passport.js";
import "./App.css";
import './index.css';
import { isFirstCall } from "../src/Pages/Profile/Profile";
//import { isFirstRun } from "../../backend/Routes/auth";
console.log("101112");
function App() {

  
  return (
    <>
      <div> 
          <Routes>
            <Route path="/flightbook" element={<FlightBooking />} />
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Place />} />
            <Route path="/askourexperts" element={<AskOurExperts />} />
            <Route exact path="/flightbook" element={isFirstCall ? <FlightBooking /> :<Navigate to="/login" /> }/>
            <Route exact path="/hotelbook" element={isFirstCall ?<HotelBooking />  : <Navigate to="/login" />}/>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/places" element={<Place />} />
            <Route exact path="/profile"element={ <Profile /> }/>
            <Route exact path="/login" element={ <Login />}/>
            <Route exact path="/signup" element={ <Signup />}/>
            <Route exact path="/feedback" element={ <Feedback />}/>
            <Route exact path="/team" element={ <Team />}/>
          </Routes>
      </div>
    </>
  );
}
export default App;
