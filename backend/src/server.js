import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/recipeRoutes.js";

const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/recipes", router);

mongoose.connect(process.env.MONGO);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// DOESNT WORK AT THE MOMENT !!!1!
