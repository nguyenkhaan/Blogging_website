import express from 'express' 
const router = express.Router(); 
import { multerConfig } from '../config/server.config.mts';
import { getBlog } from '../controllers/Blog/blog.controller.mts';
import { uploadBlog } from '../controllers/Blog/uploadBlog.mts';
const upload = multerConfig() 

router.post('/blog-upload', upload.single('banner'), uploadBlog)
router.post('/blog-info' , getBlog)
export {router}