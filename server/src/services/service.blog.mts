
import { mysqlPrisma } from "../config/prisma.config.mts"
async function createData(blog: any) 
{
    return await mysqlPrisma.blogs.create({
        data: {
            blogID: blog.blogID, 
            title: blog.title, 
            content: blog.content, 
            score: blog.score, 
            views: blog.views, 
            banner: blog.banner, 
            userID: blog.userID
        }
    })
}
async function deleteData() 
{

} 
async function updateData() 
{

} 
async function getData() 
{

}
export {createData}