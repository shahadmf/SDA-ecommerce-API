import mongoose from "mongoose";
import { dev } from "./config";

// Connect to MongoDB
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dev.db.url);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};