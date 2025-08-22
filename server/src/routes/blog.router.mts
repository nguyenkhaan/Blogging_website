import express from 'express' 
const router = express.Router(); 
import { multerConfig } from '../config/server.config.mts';
import { uploadBlog , getBlog } from '../controllers/blog.controller.mts';

const upload = multerConfig() 

router.post('/blog-upload', upload.single('banner'), uploadBlog)
router.post('/blog-info' , getBlog)
export {router}