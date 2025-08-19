import express from "express";
import { getSettings, updateSettings } from "../controllers/setting.js";


const  settingRouter = express.Router();

 settingRouter.get("/", getSettings);
 settingRouter.put("/", updateSettings); // update or create

export default settingRouter;
