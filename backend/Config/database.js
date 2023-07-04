const mongoose = require("mongoose");

exports.connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb://localhost:27017/razor");
  console.log(`Mongodb is connected with ${connection.host}`);
};
