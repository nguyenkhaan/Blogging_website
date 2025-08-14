import express from 'express' 
const router = express.Router(); 
import { multerConfig } from '../config/server.config.mts';
import { uploadBlog } from '../controllers/blog.controller.mts';

const upload = multerConfig() 

router.post('/blog-upload', upload.single('banner'), uploadBlog)

export {router}
//htpp://localhost:6869/blog-upload
//**
// 
// */