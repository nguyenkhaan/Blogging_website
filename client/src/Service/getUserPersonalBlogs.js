import api from "../Aixos/api"
async function getUserPersonalBlogs(id) {
    const data = await api.post('/user/personal-blogs' , {id} , {
        headers: {
            "Content-Type" : "application/json"
        }, 
        withCredentials: 'include'
    })
    return data
} 
export {getUserPersonalBlogs}