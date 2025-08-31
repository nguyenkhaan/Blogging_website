import type { Request } from "express";
import type { Response } from "express";
import { getData } from "../../services/User/service.personalInfo.mts";

async function getPersonalInformation(req: Request, res: Response) 
{
    try {
        if (!req.body || !req.body.id) return res.status(200).json({
            code: -1, 
            message: 'Thông tin gửi lên không hợp lệ'
        })
        const data = await getData(req.body.id) 
        if (!data) return res.status(200).json({
            code: -1, 
            message: 'Thông tin gửi lên không hợp lệ'
        }) 
        const dataSent = {
            avatar: data.avatar, 
            id: data.userID, 
            email: data.username, 
            follows: data.follows, 
            subscribers: data.subscribers, 
            name: data.name, 
            activities: data.activities, 
            password: data.password, 
            blogs: data.blogs 
        }
        return res.status(200).json({
            code: 2, 
            message: 'Loaded personal information successfully', 
            data: dataSent 
        })
    } catch (error) {
        return res.status(500).json({
            code: -2, 
            message: 'Lỗi hệ thống - Vui lòng thử lại sau'
        })
    }

}

export {getPersonalInformation }