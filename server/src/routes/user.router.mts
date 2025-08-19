import express from "express";
import { login , register } from "../controllers/user.authentication.controller.mts";
import { getPersonalInformation } from "../controllers/user.info.controller.mts";
const router = express.Router();
//[POST] /login 
router.post("/login", login );
//[POST] //register 
router.post('/register' , register)
//[GET] //personal-information 
router.post('/user/personal-info' , getPersonalInformation)
export {router}
