// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
// import express from "express";
// const app = express();

import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
dotenv.config({ path: "./env" });
connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("App is listening on port", process.env.PORT);
//     });
//   } catch (error) {
//     console.error("Error : ", error);
//     throw error;
//   }
// })();
