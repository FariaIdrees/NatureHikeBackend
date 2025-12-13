import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import tourRoutes from "./routes/tourRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import picsRoutes from "./routes/picsRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tours", tourRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/pics", picsRoutes);
app.use("/api/admin", adminAuthRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI='mongodb+srv://faria2002:2002@cluster0.t13vjql.mongodb.net/?appName=Cluster0'

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

startServer();
