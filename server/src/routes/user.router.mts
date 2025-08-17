import express from "express";
import { login , register} from "../controllers/user.controller.mts";
const router = express.Router();
//[POST] /login 
router.post("/login", login );
//[POST] //register 
router.post('/register' , register)
export {router}
