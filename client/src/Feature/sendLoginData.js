import api from "../Aixos/api";
async function sendLoginData(email ,password) 
{
    const data = new FormData; 
    data.append('username' , email) 
    data.append('password' , password) 
    const res = await api.post('/login' , data , {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        withCredentials: true
    })
    // console.log(email , password) 
    return res 
}
export {sendLoginData}