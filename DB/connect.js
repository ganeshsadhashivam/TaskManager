const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
  return console.log("Connected TO THE DB");
};

module.exports = connectDB;
