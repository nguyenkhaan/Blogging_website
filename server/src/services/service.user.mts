import { mongodbPrisma } from "../config/prisma.config.mts";
async function getData(username: string , password: string) 
{
    const user = await mongodbPrisma.user.findFirst({
        where: {
            password: password as string, 
            username: username as string
        }
    })
    if (!user) return null //Neu khong co nguoi dung thi tra ve null 
    return user 
}
export {getData}