import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MANGODB_URL}/${DB_NAME}`
    );
    console.log(`MongoDB connected! DB HOST: ${connectionResponse.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;  // Export the function itself, not its result
