import { mongodbPrisma } from "../config/prisma.config.mts"
async function getData(email: string , password: string) 
{
    const user = await mongodbPrisma.user.findFirst({
        where: {
            username: email, 
            password: password
        }
    })
    if (!user) return null 
    return user 
} 
async function createData() 
{

} 
async function updateData() 
{
     
} 
async function deleteData()
{

} 
export {getData , createData , updateData , deleteData}