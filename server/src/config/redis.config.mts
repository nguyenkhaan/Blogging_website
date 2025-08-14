import { createClient } from "redis";

const client = createClient() 
let isConnected = false 
client.on('error', err => console.log('Redis Client Error', err));
async function redisConnection() 
{
    if (!isConnected) {
        await client.connect() //Chi duoc phep ket noi 1 lan duy nhat, neu ket noi nhieu lan no se bao loi socket 
        isConnected = true 
    }
    return client 
} 
 
export {redisConnection}

/**
 * Cơ chế giải quyết các connection 
 * - Các connection, trả về 1 instance sẽ được để riêng trong 1 file bọc trong 1 hàm return về chính instance đó 
 * Trong cấc file khác nếu muốn sử dụng thì import vào và kết nối 
 */