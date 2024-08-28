import express from "express";
import { getRecipes } from "../controllers/articleController";

const router = express.Router();

router.get("/", getRecipes);

export default router;
