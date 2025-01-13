// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./databaseConnection/index.js";


connectDB()





/*<----------------------THIS IS THE FIRST APPROACH TO CONNECT WITH DATABASE MONGOOSE---------> */
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MANGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})(); // IT IS A IFEE FUNCTION PROFESSIONALLY IT STARTED WITH ";{SEMICOLON}"*/
