import { mongodbPrisma } from "../../config/prisma.config.mts";
async function getData(id: string) 
{
    const user = mongodbPrisma.user.findFirst({
        where: {
            userID: id 
        }
    }) 
    if (!user) return null 
    return user 
} 
export {getData}