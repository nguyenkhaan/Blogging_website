import type { Request } from "express"
import type { Response } from "express"
import { uploadToCloud } from "../services/uploadBlog.mts"
import { uuid } from "../helpers/uuid.mts"
import { createData } from "../services/service.blog.mts"

async function uploadBlog(req: Request, res: Response) {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ code: -1, message: 'Thiếu nội dung hoặc tiêu đề' });
        }
        let url = null
        let id = 'admin'; // hoặc uuid()
        if (req.file) {
            try {
                const base64File = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
                url = await uploadToCloud(base64File, id);
            } catch (err) {
                return res.status(500).json({ code: -2, message: 'Lỗi hê thống - Vui lòng thử lại sau' });
            }
        }
        console.log(url?.url.secure_url ?? null) 
        const blogData = {
            blogID: id,
            title,
            banner: url?.url.secure_url ?? null, //Khi co public_id thi no dang tra ve 1 object co dang 
            //{id , url : {} } vay nen ta dung ? de truy cap, ?? thi de phat hien ben trai la null thi lay null ve ben phai luon
            content,
            score: 0,
            views: 0,
            userID: 'admin'
        };

        const blog = await createData(blogData);
        return res.status(201).json({
            code: 1,
            message: 'Upload thành công',
            data: blog
        });

    } catch (error) 
    {
        console.error(error);
        return res.status(500).json({
            code: -2,
            message: 'Lỗi hệ thống - Vui lòng thử lại sau'
        });
    }
}

export { uploadBlog }

