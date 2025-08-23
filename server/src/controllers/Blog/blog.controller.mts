import type { Request } from "express"
import type { Response } from "express"
import { getData } from "../../services/Blog/crud.mts"


async function getBlog(req: Request , res: Response) 
{
    try {
        if (!req.body || !req.body.id) return res.status(200).json({
            code: -1, 
            message: 'Thông tin gửi lên không hợp lệ '
        })
        const data = await getData(req.body.id) 
        return res.status(200).json({
            code: 2, 
            message: 'Lấy thông tin thành công', 
            blogInfo: data 
        })
    } catch (error) {
        return res.status(200).json({
            code: -2, 
            message: 'Lỗi hệ thống - vui lòng thử lại sau'
        }) 
    }   
}
export {getBlog}

