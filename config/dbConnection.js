const mongoose = require("mongoose");
require('dotenv').config();
const dbConnection = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cjhd7p9.mongodb.net/?retryWrites=true&w=majority`);
    console.log("mongodb connection success!");
  } catch (error) {
    console.log("mongodb connection failed!", err.message);
  }
};

module.exports = dbConnection;
