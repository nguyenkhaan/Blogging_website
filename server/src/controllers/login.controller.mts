import type { Request } from "express";
import type { Response } from "express" 
import { getData } from "../services/service.user.mts";
import { makeToken } from "../services/createToken.mts";
async function login(req: Request , res: Response) 
{
    if (!req.body) return res.status(200).json({
        code: -1, 
        message: 'Login error'
    })
    const {email , password} = req.body 
    const user = await getData(email , password)
    if (!user) 
        return res.status(200).json({
            code: -1, 
            message: 'Incorrect login information' //Thong tin dang nhap sai 
        })
    //Thuc hien set jwt token va gui ve cho FE 
    const token = makeToken(user.userID , user.name , user.username , email.password) 
    return res.status(200).json({
        code: 2, 
        message: 'Login successfully', 
        token: JSON.stringify(token) 
    })
}
export {login}