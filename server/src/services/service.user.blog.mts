import { mongodbPrisma } from "../config/prisma.config.mts";
import { mysqlPrisma } from "../config/prisma.config.mts";
async function addBlogForUser(userID: string , blogID: string) 
{
    await mongodbPrisma.user.update({
        where: {
            userID: userID
        }, 
        data: {
            blogs: {
                push: blogID
            }
        }
    })
}
async function getUserPersonalBlogs(userID : string) 
{
    let selection = await mongodbPrisma.user.findFirst({
        where: {
            userID: userID
        }, 
        select: {
            blogs: true //Lay ra mang blogs 
        }
    })  
    let blogID: string[]= [] 
    if (selection) blogID = selection.blogs; 
    const blogs = await mysqlPrisma.blogs.findMany({
        where: {
            blogID: {
                in: blogID as string[] 
            }
        }, 
        select: {
            banner: true, 
            blogID: true, 
            content: true, 
            title: true, 
            score: true  
        }
    })
    return blogs; 
}  
export {addBlogForUser , getUserPersonalBlogs}