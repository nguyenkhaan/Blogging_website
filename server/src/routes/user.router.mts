import express from 'express' 
import { login } from '../controllers/login.controller.mts'
import { multerConfig } from '../config/server.config.mts'
const router = express.Router() 

const upload = multerConfig() 
router.post('/login' , upload.none(), login)
router.post('/register' , upload.none() , (req , res) => {
    console.log(req.body) 
})
export {router}