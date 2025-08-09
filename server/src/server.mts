import express from 'express' 
import 'dotenv/config'; 
import { serverConfig } from './config/server.config.mts';
const server = express() 
const HOST = process.env.HOST 

serverConfig(server); 

server.listen(HOST , function() {
    console.log('Server khoi dong thanh cong')
})
