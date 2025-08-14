import { redisConnection } from "../config/redis.config.mts";
import { uuid } from "../helpers/uuid.mts";

async function createSession(id: string) //Day chinh la id cua nguoi dung 
{
    const client = await redisConnection() 
    const sessionID = uuid() + uuid() + Date.now().toString() 
    await client.set(sessionID , id)
    return sessionID
    
} 
async function findSession(sessionID: string) 
{
    const client = await redisConnection() 
    const userID = client.get(sessionID) 
    if (!userID) return null 
    return userID  
} 
async function deleteSession(sessionID: string) 
{
    const client = await redisConnection() 
    const userID = await client.get(sessionID) 
    if (!userID) return null 
    await client.del(sessionID) 
    return userID
} 
export {createSession , findSession , deleteSession}