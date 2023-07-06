const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
const paymentRoute = require("../backend/Routes/payment.js");
 const app = express();
 config({ path: "./config/config.env" });
const Payment = require('../backend/Model/paymentModel.js');
 const Razorpay = require("razorpay");
const { connectDB } = require('../backend/Config/database.js');

app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(express.json());
const corsOptions = {
  origin: "http://127.0.0.1:5173",
};
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


//route for razor
app.use("/api/payment" , paymentRoute);

//mongo  for razorpay

connectDB();

require("dotenv").config();
const passport = require('passport');
const authRoute = require("../backend/Routes/auth.js");
const cookieSession = require("cookie-session");
const session = require('express-session');
const mongoose = require("mongoose");
const passportSetup = require("./passport.js");
const feedbackdetails = require("../backend/Model/Feedbackuser.js");

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize(passportSetup));
app.use(passport.session());



app.use("/auth", authRoute);


app.use(cors(corsOptions));
let store=1;
// Set the request parameters
let result = []; // array to store results
let place;
app.post("/endpoint", (req, res) => {
  console.log(req.body.value);
  place = req.body.value;
  res.json({ message: "Message received successfully" });
});



app.post("/feedback",function(req,res){
  const {name,email,feedback}=req.body.value;
  const feedbackuser=new feedbackdetails({
      name,
      email,
      feedback
  })
 
  
  feedbackuser.save();
  try {
    res.send({ message: "Feedback Submitted Successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
})

app.post('/api/payment/save', async (req, res) => {
  try {
    const { paymentId, amount, currency, name, email } = req.body;

    console.log(paymentId , amount , name , email)
    // Create a new payment document
    const payment = new Payment({
      paymentId,
      amount,
      currency,
      name,
      email,
    });

    // Save the payment document to the database
    await payment.save();

    // Send a success response
    res.status(200).json({ message: 'Payment details saved successfully' });
  } catch (error) {
    console.log(error);
    // Send an error response
    res.status(500).json({ error: 'An error occurred while saving payment details' });
  }});

app.get("/endpoint", async (req, res) => {
  try {
    const apiKey1 = "4c724267ab654a9c9297fcd12d294dd3";
    const location = place;

    // Set the API endpoint URL
    const apiUrl1 = "https://api.opencagedata.com/geocode/v1/json";

    let latitude;
    let longitude;

    // Send the GET request to the OpenCage Geocoding API
    const response1 = await axios.get(apiUrl1, {
      params: {
        key: apiKey1,
        q: location,
      },
    });

    let results = response1.data.results;
    if (results.length > 0) {
      let { lat, lng } = results[0].geometry;
      latitude = lat;
      longitude = lng;
    } else {
      console.log("No results found for the specified location.");
    }

    const apiKey = "5ae2e3f221c38a28845f05b68b97ff63569ce43e4b48e34b24f06f38";
    const radius = 70000;

    const response2 = await axios.get(
      "https://api.opentripmap.com/0.1/en/places/radius",
      {
        params: {
          apikey: apiKey,
          radius: radius,
          lon: longitude,
          lat: latitude,
          limit: 25,
          rate: 3,
          k: "tourist_attraction",
        },
      }
    );
   
    const results2 = response2.data.features;

    for (let i = 0; i < results2.length; i++) {
      const place = results2[i].properties;
      const placeData = {};

      // Store place name
      placeData.name = place.name;
      placeData.key=store++;
      console.log(place.name);
      // Get place description from Wikipedia API
      const placeName = place.name;
      const apiUrl3 = "https://en.wikipedia.org/w/api.php";

      const response3 = await axios.get(apiUrl3, {
        params: {
          action: "query",
          format: "json",
          prop: "extracts",
          exintro: true,
          explaintext: true,
          titles: placeName,
        },
      });

      const pages = response3.data.query.pages;
      const pageId = Object.keys(pages)[0];
      const extract = pages[pageId].extract;

      
      if(extract){
      const fiftyWords = extract.split(" ").slice(0, 50).join(" ");
      placeData.description = fiftyWords;
      }
      

      // Get image link from Pexels API
      const apiKey2 = "nY1qiKNFc6LEfHzSycZmX5kf8DnOoOitufX4mxNVqpmHircg69mO7Q1P";
      const searchQuery = placeName;
      const apiUrl4 = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`;

      const response4 = await axios.get(apiUrl4, {
        headers: {
          Authorization: apiKey2,
        },
      });

      const photos = response4.data.photos;
      if (photos.length > 0) {
        // Store image link
        placeData.ImageLink = photos[0].src.large;
      } else {
        placeData.ImageLink = "";
      }

      // Add place data to the result array
      result.push(placeData);
    }

    // Send the result as JSON
    res.json(result);
    result=[];
  } catch (error) {
    console.error("Error:", error);
    res.json(result);
  }
});

app.listen(5000, function () {
  console.log("Server Started On Port 5000");
});

module.exports = app;
// module.exports.instance = instance;