import express from "express";
import { login } from "../controllers/login.controller.mts";
const router = express.Router();

router.post("/login", login );
export {router}
