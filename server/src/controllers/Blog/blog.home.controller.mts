import type { Request } from "express";
import type { Response } from "express";
import { mysqlPrisma } from "../../config/prisma.config.mts";
async function countBlogs(req: Request , res: Response) 
{
    const totalBlogs = await mysqlPrisma.blogs.count(); 
    return res.status(200).send(totalBlogs) 
}


export {countBlogs}