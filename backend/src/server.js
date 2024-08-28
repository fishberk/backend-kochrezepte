import router from "./routes/recipeRoutes.js";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";

// Initialize express server
const server = express();

// Middleware
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Use routes
server.use("/recipes", router);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Set up server to listen on a specific port
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// DOESNT WORK AT THE MOMENT !!!1!
