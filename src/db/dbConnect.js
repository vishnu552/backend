import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

async function connectDB() {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `MongoDB connection successfull and HOST : ${connection.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed ... ", error);
    process.exit(1);
  }
}
export default connectDB;
