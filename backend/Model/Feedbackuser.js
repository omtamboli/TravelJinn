const mongoose =require("mongoose");

const detailsSchema= new mongoose.Schema({
    name:String,
    email:String,
    feedback:String
    });
const Feedbackdetails= new mongoose.model("Feedbackdetails",detailsSchema);

module.exports = Feedbackdetails;