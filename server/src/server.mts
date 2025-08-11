import express from 'express' 
import dotenv from 'dotenv'
import cors from 'cors'
import { router as blogRouter } from './routes/blog.router.mts'
import { jsonConfig , urlEncodedConfig , multerConfig , staticFileConfig } from './config/server.config.mts'
dotenv.config() 

const HOST = process.env.PORT 
const app = express()

app.use(cors({
    origin: 'http://localhost:5173', // hoặc '*' nếu cho tất cả
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));
jsonConfig(app) 
urlEncodedConfig(app) 
staticFileConfig(app) 

app.use(blogRouter) 

app.listen(6869 , function() {
    console.log('Khoi dong thanh cong') 
})