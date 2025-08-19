import express from "express";
import {
  getContent,
  createContent,
  updateContent,
  deleteContent,
} from "../controllers/content.js";

const contentRouter = express.Router();

// GET all content
contentRouter.get("/", getContent);

// CREATE new content
contentRouter.post("/", createContent);

// UPDATE content by ID
contentRouter.put("/:id", updateContent);

// DELETE content by ID
contentRouter.delete("/:id", deleteContent);

export default contentRouter;
