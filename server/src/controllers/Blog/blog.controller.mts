//Dung để đọc dữ liệu 1 bài Blog - Xài cho trang InnerBGlog 
import type { Request } from "express"
import type { Response } from "express"
import { getData , deleteData } from "../../services/Blog/crud.mts"


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

async function deleteBlog(req: Request , res: Response) 
{
    console.log(req.body)
    await deleteData(req.body.blogID , req.body.userID) 
    console.log('Thuc hien xoa bai') 
    return res.status(200).json({
        code: 2, 
        message: 'Gửi thông tin xóa bài thành công'
    })
}
export {getBlog , deleteBlog}

