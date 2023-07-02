const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
  username:String,
  email: String,
  profilePic:String,
  _id:String
});

// export const Payment = mongoose.model("Payment", paymentSchema);
const users= mongoose.model("users",userSchema);
module.exports = users; 