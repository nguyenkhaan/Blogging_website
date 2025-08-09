import express from 'express' 
import type { Application } from 'express'   
//Khi su dung mts, thi Apllication se la type, bi bo qua va bao khong tim thay. De co the import, ta dung cu phap import type 
function serverConfig(server : Application) 
{
    server.use(express.static('./public'))
    server.use(express.json()); 
    server.use(express.urlencoded({extended: false}))
}

export {serverConfig}