import { mongodbPrisma } from "../../config/prisma.config.mts";
import { mysqlPrisma } from "../../config/prisma.config.mts";
async function getPersonalBlog(userID : string) 
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
export {getPersonalBlog}