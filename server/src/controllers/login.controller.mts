import type { Request } from "express";
import type { Response } from "express";
import { getData } from "../services/service.user.mts";
import { createSession } from "../services/service.redis.mts";
async function login(req: Request , res: Response) 
{
    const {username , password} = req.body; 
    const user = await getData(username , password) //Tim userID cua thang user nay trong database, neu khong tim thay thi tra ve NULL 
    //Neu su dung email thi co the trung du lieu 
    console.log(user) 
    if (user) {
        //Set cookies
        const userID = user.userID 
        const sessionID = await createSession(userID) 
        res.setHeader('Set-Cookie' , `sessionID=${sessionID}; HttpOnly`) //Đặt cookies để gửi về cho trang web 
        console.log(sessionID) 
        return res.status(200).json({
            code: 2, 
            message: 'Login successfully'
        })
    } 
    else return res.status(200).json({
        code: -1, 
        message: 'Email or Password incorrect'
    })
}
export {login}