const mongoose = require("mongoose");

exports.connectDB = async () => {
  await mongoose.connect("mongodb+srv://gauravahuja1213:G6KxJkczz9XGEgEk@cluster0.hlektms.mongodb.net/logindb",{ useNewUrlParser : true});
  console.log("Connected to MongoDB");
};

