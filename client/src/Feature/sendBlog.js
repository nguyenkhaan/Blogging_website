import api from "../Aixos/api";
async function sendBlog(submissionData) 
{
    const data = new FormData; 
    data.append('title' , submissionData.title) 
    data.append('content' , submissionData.content) 
    const file = submissionData.banner   //Khong tu hien thi ra chuoi base64 hoac nhi phan vi se rat lon 
    data.append('banner', file)
    await api.post('/blogs' , data , {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
export {sendBlog}