import express from 'express' 
const router = express.Router(); 
import { multerConfig } from '../config/server.config.mts';

const upload = multerConfig() 
router.post('/blogs', upload.single('banner'), (req , res) => {
    console.log('Nhan du lieu thanh cong')
    console.log(req.body); 
})

export {router}