import express from "express";
import { createPage, deletePage, getPageBySlug, getPages, updatePage } from "../controllers/page.js";


const pageRouter = express.Router();

// Admin routes
pageRouter.get("/", getPages);
pageRouter.post("/", createPage);
pageRouter.put("/:id", updatePage);
pageRouter.delete("/:id", deletePage);

// Public route (frontend)
pageRouter.get("/slug/:slug", getPageBySlug);

export default pageRouter;
