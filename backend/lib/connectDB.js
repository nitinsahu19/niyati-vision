import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO);
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
