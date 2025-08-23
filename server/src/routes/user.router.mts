import express from "express";
import { login , register } from "../controllers/User/user.authentication.controller.mts";
import { getPersonalInformation } from "../controllers/User/user.personalInfo.mts";
import { getUserBlogs } from "../controllers/User/getUserBlog.mts";
const router = express.Router();
//[POST] /login 
router.post("/login", login );
//[POST] //register 
router.post('/register' , register)
//[GET] //personal-information 
router.post('/user/personal-info' , getPersonalInformation)
//[POST] //perosnal - blogs 
router.post('/user/personal-blogs' , getUserBlogs)
export {router}
