import api from "../Aixos/api";

async function deleteUserPersonalBlog(id) {
    const res = await api.post('/delete-personal-blog' , {id} , {
        headers: {
            "Content-Type" : "application/json"
        }, 
        withCredentials: 'include'
    })
    return res 
}
export {deleteUserPersonalBlog}