// Import necessary modules
import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Ensure this file exports the `connectDB` function
import { app } from "./app.js"; // Ensure this file exports the `app` instance

// Configure dotenv to load environment variables
dotenv.config({ path: "./.env" });

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed: ", err);
  });

/*
Sample `connectDB` implementation (./db/index.js):
---------------------------------------------------
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB: ", error);
    throw error;
  }
};

export default connectDB;
*/

/*
Sample `app` implementation (./app.js):
---------------------------------------
import express from "express";

const app = express();

// Add middleware, routes, etc.
app.use(express.json());

export { app };
*